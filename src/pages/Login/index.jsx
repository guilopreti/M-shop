import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { InnerContainer, MainContainer } from "./styles";
import Input from "../../components/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Redirect, useHistory } from "react-router-dom";
import { AuthContext } from "../../providers/auth";
import { useContext } from "react";
import { RegisterContext } from "../../providers/register";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const { authenticated, setAuthenticated, setAuthUser } =
    useContext(AuthContext);
  const { users } = useContext(RegisterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  if (authenticated) {
    return <Redirect to="/" />;
  }

  const handleLogin = (data) => {
    if (
      users.userList.some(
        ({ email, password }) =>
          email === data.email && password === data.password
      )
    ) {
      const actualUser = users.userList.find(
        ({ email }) => email === data.email
      );

      localStorage.setItem(
        "@MotorShop:authUser",
        JSON.stringify({ ...data, name: actualUser.name })
      );

      setAuthUser({ ...data, name: actualUser.name });

      toast.success("Login feito com sucesso");

      setAuthenticated(true);

      history.push("/");
    } else {
      toast.error("Erro na autenticação, verifique seu e-mail ou senha");
    }
  };

  return (
    <MainContainer>
      <Header />
      <InnerContainer>
        <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
          <h2 className="login-title">Login</h2>

          <Input
            inputOrNot={true}
            name="email"
            register={register}
            errored={errors?.email}
            className={"txtbox user-login"}
            placeholder="Digitar usuário"
            label="Usuário"
            width="315px"
            height="54px"
          ></Input>

          <Input
            inputOrNot={true}
            name="password"
            register={register}
            errored={errors?.password}
            className="txtbox password"
            placeholder="Digitar senha"
            label="Senha"
            width="315px"
            height="54px"
            type="password"
          ></Input>

          <div className="forgot-password">Esqueci minha senha</div>
          <div className="login-form-btn-container">
            <Button
              type="submit"
              className="login-form-btn"
              bgColor="var(--grey-4)"
              // borderColor="var(--brand-1)"
              fontColor="var(--grey-0)"
            >
              Entrar
            </Button>
          </div>
          <div className="new-acc-question">Ainda não possui conta?</div>
          <div className="login-form-btn-container">
            <Button
              type="button"
              className="login-form-btn"
              onClick={() => history.push("/register")}
            >
              Cadastrar
            </Button>
          </div>
        </form>
      </InnerContainer>
      <Footer />
    </MainContainer>
  );
};

export default Login;
