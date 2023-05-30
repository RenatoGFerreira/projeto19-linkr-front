import {ScreenContainer, LogoContainer, FormContainer, StyledInput, StyledButton, TextContainer} from "./Style.js"

export default function SignupPage(){
    return(
        <ScreenContainer>
            <LogoContainer>
                <TextContainer>
                <h1>linkr</h1>
                <h2>save, share and discover the best links on the web</h2>
                </TextContainer>
            </LogoContainer>
            <FormContainer>
            <form >
                <StyledInput
                    name="email"
                    placeholder="e-mail"
                    type="email"
                />
                <StyledInput
                    name="password"
                    placeholder="senha"
                    type="password"
                />
                <StyledInput
                    name="username"
                    placeholder="username"
                    type="text"

                />
                <StyledInput
                    name="pictureUrl"
                    placeholder="picture url"
                    type="url"
                />
                <StyledButton>
                    Sign Up
                </StyledButton>  
            </form>
            </FormContainer>
        </ScreenContainer>
    )
}