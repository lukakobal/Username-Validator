import { useState } from "react";
import "./styles.css";

export default function App() {
  const [username, setUsername] = useState("");

  const isTooShort = username.length > 0 && username.length < 3;
  const isValid = username.length >= 3;

  return (
    <div className="app">
      <h1>Username Validator</h1>

      <input
        type="text"
        placeholder="Enter usernam"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {isTooShort && (
        <p className="error">Username must be at least 3 characters.</p>
      )}

      {isValid && <p className="success">Username looks good ✅</p>}
    </div>
  );
}
