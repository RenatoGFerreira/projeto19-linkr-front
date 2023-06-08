import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";
import { BoxComment , StyledInput, Comment, CommentData, CommentLine, Data, InsertComment } from "./Style";

export default function PostComment(){
    const { auth } = useContext(AuthContext);
    console.log(auth)
    return(
        <BoxComment>
            <Comment>
                <CommentData>
                    <img src={auth.image} alt=""/>
                    <Data>
                        <p>name</p>
                        <p>text</p>
                    </Data>
                </CommentData>
                <CommentLine></CommentLine>
            </Comment>
            <InsertComment>
                <img src={auth.image} alt=""/>
                <StyledInput 
                type="text" 
                placeholder="write a comment..." 
                /* {< Plane onClick={console.log("Plane")} />} */
                /> 
            </InsertComment>
        </BoxComment>
    )
}