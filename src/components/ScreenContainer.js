
import styled from "styled-components"

export default function ScreenContainer({children}){
    return(
        <ScreenContainer>
            {children}
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #333;
`