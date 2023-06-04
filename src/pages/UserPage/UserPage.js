import { useContext, useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import ScreenContainer from "../../components/ScreenContainer";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { Container, TimeContainer } from "./Style";
import Publication from "../../components/TimeLineComponent/PublicationsTimeLine/Publications";

export default function UserPage() {

    const { auth } = useContext(AuthContext);
    //const navigate = useNavigate();
    const { id } = useParams();
    //const config = { headers: { Authorization: `Bearer ${auth.token}` } };
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        getUserPosts();
    });

    async function getUserPosts() {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`);
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
                    {userPosts.map(p => <Publication
                        key={p.id}
                        user={p.userId}
                        description={p.description}
                        url={p.url} />)}
                </TimeContainer>
            </Container>
        </ScreenContainer>
    );
}
