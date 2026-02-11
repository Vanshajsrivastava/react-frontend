
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [apiOk, setApiOk] = useState(false);
  const [backendMessage, setBackendMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        if (!res.ok) throw new Error(`API ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setApiOk(true);
        setBackendMessage(data?.message || "Connected");
      })
      .catch((e) => setError(e.message));
  }, []);

  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">DevOps Project</p>
        <h1>Frontend Is Live</h1>
        <p className="subtitle">Deployment pipeline is active and serving traffic.</p>

        <div className={`status ${apiOk ? "ok" : "fail"}`}>
          {apiOk ? "Backend Connected" : "Backend Unavailable"}
        </div>

        <p className="meta">
          {apiOk ? `API says: ${backendMessage}` : `Error: ${error || "Checking..."}`}
        </p>
      </section>
    </main>
  );
}
