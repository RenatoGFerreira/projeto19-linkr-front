import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import ScreenContainer from "../../components/ScreenContainer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, ConteudoHashtag, TimeContainer } from "./Style";
import Publication from "../../components/TimeLineComponent/PublicationsTimeLine/Publications";
import TrendingHashtags from "../../components/TimeLineComponent/TrendingTimeLine/Trending";

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
            console.log(res.data);
            setUser(res.data[0].name);

        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <ScreenContainer>
            <NavBar />
            <Container>
                <h2>{user}'s posts</h2>
                <ConteudoHashtag>
                    <TimeContainer>
                        {userPosts.map(p => <Publication
                            key={p.id}
                            userId={p.userId}
                            id={p.id}
                            name={p.name}
                            image={p.image}
                            url={p.url}
                            likes={p.likes}
                            description={p.description}
                            titlemeta={p.titlemeta}
                            descriptionmeta={p.descriptionmeta}
                            imagemeta={p.imagemeta} />
                        )}
                    </TimeContainer>
                    <TrendingHashtags />
                </ConteudoHashtag>
            </Container>
        </ScreenContainer>
    );
}
