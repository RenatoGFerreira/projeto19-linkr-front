import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useState, useEffect  } from "react";
import { BoxComment , StyledInput, Comment, CommentData, CommentLine, Data, InsertComment, Plane, Input } from "./Style";
import apiPosts from "../../../services/apiPost";

export default function PostComment({id, isComment, setNumComments}){
    const { auth } = useContext(AuthContext);
    const token = auth.token;
    const post = id;
    const [comments, setComments] = useState([]);
    const [semComments, setSemCommments] = useState(true);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => { 
        if (isComment === true) {
            getComments(post)
        }} ,[setComments]);


    function getComments(post){
        console.log("entrou no getPost", post)
        const body = { postId: post };
        apiPosts.getComment(body)
        .then(res => {
            if (Number(res.data[0].NumComentarios) !== 0){
                setNumComments(res.data[0].NumComentarios);
                setSemCommments(false);
                setComments(res.data[1]);
            }
        })
        .catch(err =>{
          console.log(err.response.data)
        })
    } 

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    
    const handlePlaneClick = () => {

        const body = {comments: inputValue, postId: post};
        apiPosts.postComment(body, token)
        .then(res => {
            console.log(res.data)
            getComments(post);
            setInputValue('');
        })
        .catch(err =>{
          console.log(err.response.data)
        })       
    };

    return(
        <BoxComment>
            {semComments ? "" : (
                comments.map(c => (
                    <Comment>
                        <CommentData>
                            <img src={c.image} alt=""/>
                            <Data>
                                <h1>{c.name} <span>• following </span></h1>
                                <p>{c.comments}</p>
                            </Data>
                        </CommentData>
                    <CommentLine></CommentLine>
                </Comment>
                ))
            )} 
            <InsertComment>
                <img src={auth.image} alt=""/>
                <Input>
                    <StyledInput 
                    type="text" 
                    value={inputValue}
                    placeholder="write a comment..." 
                    onChange={handleInputChange}
                    /> 
                    < Plane onClick={handlePlaneClick} />
                </Input>
                
            </InsertComment>
        </BoxComment>
    )
}