import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import ScreenContainer from "../../components/ScreenContainer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, TimeContainer } from "./Style";
import Publication from "../../components/TimeLineComponent/PublicationsTimeLine/Publications";

export default function UserPage() {

    const { id } = useParams();
    const [userPosts, setUserPosts] = useState([]);
    const [user, setUser] = useState("");

    useEffect(() => {
        getUserPosts();
    }, []);

    async function getUserPosts() {
        try {
            const res = await axios.get(`http://localhost:5000/user/${id}`);
            setUserPosts(res.data);
            setUser(res.data[0].username);

        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <ScreenContainer>
            <NavBar />
            <Container>
                <h2>{user}'s posts</h2>
                <TimeContainer>
                    {userPosts.map(p => <Publication
                        key={p.id}
                        name={p.username}
                        image={p.image}
                        description={p.description}
                        userId={p.userId}
                        url={p.url} />)}
                </TimeContainer>
            </Container>
        </ScreenContainer>
    );
}
