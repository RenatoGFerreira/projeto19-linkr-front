import { useState } from "react";
import {
  ScreenContainer,
  LogoContainer,
  FormContainer,
  StyledInput,
  StyledButton,
  TextContainer,
  StyledLink,
} from "./Style.js";
import { ThreeDots } from "react-loader-spinner";
import apiAuth from "../../services/apiAuth.js";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    image: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSignUp(event) {
    event.preventDefault();
    setIsLoading(true);

    apiAuth
      .signup(form)
      .then((res) => {
        console.log(res.data)
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setIsLoading(false);
      });
  }

  return (
    <ScreenContainer>
      <LogoContainer>
        <TextContainer>
          <h1>linkr</h1>
          <h2>save, share and discover the best links on the web</h2>
        </TextContainer>
      </LogoContainer>
      <FormContainer>
        <form onSubmit={handleSignUp}>
          <StyledInput
            name="email"
            placeholder="e-mail"
            type="email"
            required
            disabled={isLoading}
            value={form.email}
            onChange={handleForm}
          />
          <StyledInput
            name="password"
            placeholder="senha"
            type="password"
            required
            disabled={isLoading}
            value={form.password}
            onChange={handleForm}
          />
          <StyledInput
            name="username"
            placeholder="username"
            type="text"
            required
            disabled={isLoading}
            value={form.username}
            onChange={handleForm}
          />
          <StyledInput
            name="image"
            placeholder="picture url"
            type="url"
            required
            disabled={isLoading}
            value={form.image}
            onChange={handleForm}
          />
          <StyledButton>
            {isLoading ? (
              <ThreeDots width={50} height={50} color="#fff" />
            ) : (
              "Sign Up"
            )}
          </StyledButton>
          <StyledLink to="/">Switch back to log in</StyledLink>
        </form>
      </FormContainer>
    </ScreenContainer>
  );
}
