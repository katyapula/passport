import { useState } from "react";
import { Input, Box } from "@chakra-ui/react";

import { Field } from "../components/ui/field.tsx";
import {useNavigate} from "react-router";
import {Button} from "@/components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("token", "your-auth-token");
    navigate("/home");
  };


  return (
    // TODO: 1. Use `react-hook-form` for forms
    // TODO: 2. Add validation. Use `zod` package.
    <Box>
      <Field label="Email" invalid>
        <Input
          value={email}
          name="email"
          placeholder="me@example.com"
          onChange={(v) => {
            setEmail(v.target.value);
          }}
        />
      </Field>
      <Field label="Password" invalid>
        <Input
          value={password}
          name="password"
          placeholder="*****"
          onChange={(v) => {
            setPassword(v.target.value);
          }}
        />
      </Field>
      <Button onClick={handleLogin}>Login</Button>
    </Box>
  );
}
