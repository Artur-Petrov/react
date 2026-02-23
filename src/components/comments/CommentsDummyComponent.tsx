import type {ICommentsDummy} from "../../models/CommentsDummyJson/ICommentsDummy.ts";
import {useEffect, useState} from "react";
import {CommentService} from "../../services/api.service.ts";
import CommentDummyComponent from "./comment/CommentDummyComponent.tsx";

const CommentsDummyComponent = () => {
    const [comments, setComments] = useState<ICommentsDummy[]>([])

    useEffect(() => {
        CommentService.getCommentsDummy()
            .then(comments => setComments(comments))
    }, [])

    return (
        <div>
            {
                comments.map((comment: ICommentsDummy) => <CommentDummyComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsDummyComponent;