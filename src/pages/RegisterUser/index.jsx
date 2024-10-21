import CardRegisterSection from "./styled";
import PageComponent from "../../components/PageComponent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardRegister from "../../components/Register";
import { useContext } from "react";
import { AuthContext } from "../../providers/auth";
import { Redirect } from "react-router-dom";

const RegisterUserPage = () => {
  const { authenticated } = useContext(AuthContext);

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <PageComponent>
      <Header username={"Samuel Leão"}></Header>

      <CardRegisterSection className="section-register">
        <CardRegister />
      </CardRegisterSection>

      <Footer />
    </PageComponent>
  );
};

export default RegisterUserPage;
