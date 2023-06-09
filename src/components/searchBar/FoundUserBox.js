import { useNavigate } from "react-router-dom";

export default function FoundUserBox({ image, username, userId }) {
    const navigate = useNavigate();

    function navigateUser(userId) {
        navigate(`/user/${userId}`);
        window.location.reload();
    }

    return (
        <li onClick={() => navigateUser(userId)}>
            <img src={image} alt="User" />
            <p>{username}</p>
        </li>
    );
}