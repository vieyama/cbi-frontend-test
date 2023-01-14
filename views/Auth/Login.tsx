import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import cookies from "js-cookie";
import { useRouter } from "next/router";

import { BASE_URL } from "constants/globalVariable";

import { ButtonStyled, Container, InputStyled } from "./styled";
import { LoginText } from "./styled";
import { toast } from "react-toastify";

const Login = ({ type = "login" }: { type?: "login" | "register" }) => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    await axios
      .post(`${BASE_URL}/${type}`, {
        ...data,
      })
      .then((res) => {
        type === "login" && cookies.set("auth", JSON.stringify(res?.data));
        toast.success(`Berhasil ${type}.`);
        return router.push(type === "login" ? "/" : "/auth/login");
      })
      .catch((err) => {
        const isInvalidPassword = err.response.data.errors.find(
          (item: { message: string }) =>
            item.message === "E_INVALID_AUTH_PASSWORD: Password mis-match"
        );

        if (isInvalidPassword) {
          return toast.error("Email / Password Salah");
        }
        return toast.error("Terjadi Kesalahan, silahkan coba kembali!");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <LoginText>{type.toLocaleUpperCase()}</LoginText>
        <InputStyled
          className="input"
          placeholder="Email"
          {...register("email", {
            required: true,
          })}
        />
        <InputStyled
          type="password"
          className="input"
          placeholder="Password"
          {...register("password", {
            required: true,
          })}
        />
        <ButtonStyled type="submit">{type.toLocaleUpperCase()}</ButtonStyled>
        <a href={`/auth/${type}`}>{type === "login" ? "Register" : "Login"}</a>
      </Container>
    </form>
  );
};

export default Login;
