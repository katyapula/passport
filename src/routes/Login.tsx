import {Box, Heading, Input} from "@chakra-ui/react";

import { Field } from "@/components/ui/field";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserSchema, userToBase64Token, validUserToken } from "@/app/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import {Toaster, toaster} from "@/components/ui/toaster";

interface IFormInput {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(UserSchema),
  });

  const navigate = useNavigate();

  const createToaster = () => {
    toaster.create({
      description: "Invalid credentials",
      type: "error",
    });
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const userToken = userToBase64Token(data.email, data.password);
    if (validUserToken === userToken) {
      localStorage.setItem("token", userToken);
      navigate("/home");
    } else {
      createToaster();
    }
  };

  return (
    // TODO: 1. Use `react-hook-form` for forms
    // TODO: 2. Add validation. Use `zod` package.
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h1" size="lg" my={4}>Login</Heading>
      <Field label="Email" invalid mb={4}>
        <Input {...register("email")} placeholder="me@example.com" />
        <Box color="red.600" fontSize="xs">
          {errors.email?.message}
        </Box>
      </Field>
      <Field label="Password" invalid mb={4}>
        <Input {...register("password")} placeholder="*****" />
        <Box color="red.600" fontSize="xs">
          {errors.password?.message}
        </Box>
      </Field>
      <Button type="submit">Login</Button>
      <Toaster />
    </form>
  );
}
