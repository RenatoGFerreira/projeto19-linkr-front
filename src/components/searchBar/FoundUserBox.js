
export default function FoundUserBox({ image, username }) {

    return (
        <li>
            <img src={image} alt="User" />
            <p>{username}</p>
        </li>
    );
}