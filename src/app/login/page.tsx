"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure } from "../../redux/authSlice";
import { RootState } from "../../store/store";
import Link from "next/link";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.auth.error);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://utask.kstu.kg/api/account/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwNzczMjc2NSwiaWF0IjoxNzA3MzAwNzY1LCJqdGkiOiIyZDcwYzg2ZTQ1NGQ0MjQ1OGQ5ODYwNDI4OTgyY2VhYyIsInVzZXJfaWQiOjQwMH0.P7x_-ZtXMfXy9SIJgnlC0lOhrmStHM2dC3ExpBDq-Zg",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();
      dispatch(loginSuccess({ token: data.token, username }));
    } catch (error) {
      dispatch(loginFailure("Invalid username or password"));
    }
  };

  return (
    <div className="mt-[100px]">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          className="border"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link href="/">Login</Link>
      </form>
    </div>
  );
};

export default Login;
