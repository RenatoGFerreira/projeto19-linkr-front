import { useContext, useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import ScreenContainer from "../../components/ScreenContainer";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

export default function UserPage() {

    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const { userId } = useParams();
    const config = { headers: { Authorization: `Bearer ${auth.token}` } };
    const [userLinks, setUserLinks] = useState([]);

    useEffect(() => {
        if (!auth.token) {
            alert("Não tens permissão para continuar, faça o login.");
            navigate("/");
        } else {
            getUserLinks();
        };
    });

    async function getUserLinks() {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/user:/${userId}`, config);
            setUserLinks(res.data);

        } catch (error) {
            alert(error.response.data);
        }

    };

    return (
        <ScreenContainer>
            <NavBar />
            <div>
                {userLinks}
            </div>
        </ScreenContainer>
    );
}