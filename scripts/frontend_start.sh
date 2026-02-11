#!/bin/bash
set -euo pipefail

systemctl enable nginx
systemctl restart nginx
