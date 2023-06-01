import { useContext, useState } from "react";
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
import { AuthContext } from "../../contexts/AuthContext.js";

export default function SigninPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSignIn(event){
    event.preventDefault()
    setIsLoading(true)

    apiAuth.signin(form)
        .then(res => {
        setIsLoading(false)
        const {id, username, image, token} = res.data
        console.log(res.data)
        setAuth({id, username, image, token})
        navigate("/timeline")

        })
        .catch(err => {
          alert(err.response.data.message)
          setIsLoading(false)
        })
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
        <form onSubmit={handleSignIn}>
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
          <StyledButton>
            {isLoading ? (
              <ThreeDots width={50} height={50} color="#fff" />
            ) : (
              "Log in"
            )}
          </StyledButton>
          <StyledLink to="/signup">First time? Create an account!</StyledLink>
        </form>
      </FormContainer>
    </ScreenContainer>
  );
}