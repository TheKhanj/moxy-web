import { z } from "zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { redirect, useSearchParams } from "react-router-dom";

import { SERVICES } from "../../services";
import { accountCodeMessage } from "../../services/account/account.service";

function getParams() {
  const [params] = useSearchParams();

  return z
    .object({
      redirectPath: z.string().default("/"),
    })
    .parse(
      Array.from(params.keys()).reduce((prev, key) => {
        prev[key] = params.get(key);
        return prev;
      }, {} as any),
    );
}

export function Login() {
  const params = getParams();
  const { redirectPath } = params;

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    SERVICES.account.login(username, password).then((code) => {
      if (!code) {
        setError("");
        navigate(redirectPath);
        return;
      }

      setError(accountCodeMessage(code));
    });
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <div hidden={error.length === 0}>{error}</div>
      </form>
    </div>
  );
}
