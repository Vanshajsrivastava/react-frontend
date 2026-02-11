import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setMsg(data.message || "No message"))
      .catch((e) => setErr(e.message));
  }, []);

  if (err) return <h1>API Error: {err}</h1>;
  return <h1>{msg}</h1>;
}

export default App;
