import React, { useState } from "react";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import { Container, Form } from "./styles";

export default function Login({ history }) {
  const [username, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await api.post("/devs", { username });
      localStorage.setItem("user", data._id);
      history.push(`/dev/${data._id}`);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          onChange={e => setUsername(e.target.value)}
          value={username}
          placeholder="digite o seu usuario no Github"
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
