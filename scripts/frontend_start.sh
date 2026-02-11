#!/bin/bash
set -euo pipefail

# Discover backend private IP by EC2 tag and render nginx reverse-proxy config.
# Ensure AWS CLI uses the instance region even when no profile is configured.
REGION="$(curl -fsS http://169.254.169.254/latest/dynamic/instance-identity/document | sed -n 's/.*\"region\"[[:space:]]*:[[:space:]]*\"\\([^\"]*\\)\".*/\\1/p')"
if [ -z "${REGION}" ]; then
  echo "Could not determine AWS region from instance metadata."
  exit 1
fi

BACKEND_IP="$(aws ec2 describe-instances \
  --filters Name=tag:Role,Values=backend Name=instance-state-name,Values=running \
  --region "${REGION}" \
  --query 'Reservations[].Instances[].PrivateIpAddress' \
  --output text | awk 'NF{print $1; exit}')"

if [ -z "${BACKEND_IP}" ] || [ "${BACKEND_IP}" = "None" ]; then
  echo "Could not discover backend private IP from EC2 tags."
  exit 1
fi

cat >/etc/nginx/conf.d/frontend.conf <<EOF
server {
    listen 80;
    server_name _;

    root /var/www/frontend/build;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://${BACKEND_IP}:5000/;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

systemctl enable nginx
systemctl restart nginx
