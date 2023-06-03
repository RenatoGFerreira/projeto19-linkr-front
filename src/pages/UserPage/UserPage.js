import { useContext, useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import ScreenContainer from "../../components/ScreenContainer";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { Container, TimeContainer } from "./Style";
import Publication from "../../components/TimeLineComponent/PublicationsTimeLine/Publications";

export default function UserPage() {

    // const { auth } = useContext(AuthContext);
    const auth = { name: "Jon Doe", token: "token" };
    const navigate = useNavigate();
    const { userId } = useParams();
    const config = { headers: { Authorization: `Bearer ${auth.token}` } };
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        if (!auth.token) {
            alert("Não tens permissão para continuar, faça o login.");
            navigate("/");
        } else {
            getUserPosts();
        };
    });

    async function getUserPosts() {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/:${userId}`, config);
            setUserPosts(res.data);

        } catch (error) {
            alert(error.response.data);
        }

    };

    return (
        <ScreenContainer>
            <NavBar />
            <Container>
                <h2>{auth.name}'s posts</h2>
                <TimeContainer>
                    {userPosts.map(p => <Publication key={p.id} user={p.username} description={p.description} url={p.url} />)}
                    {/* colocar o component trending aqui */}
                </TimeContainer>
            </Container>
        </ScreenContainer>
    );
}
