import {useEffect, useState} from "react";
import type {IComment} from "../../models/CommentsJsonPlaceHolder/IComment.ts";
import {CommentService} from "../../services/api.service.ts";
import CommentJsonComponent from "./comment/CommentJsonComponent.tsx";

const CommentsJsonComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        CommentService.getCommentsJson()
            .then(comments => setComments(comments));
    })
    return (
        <div>
            {
                comments.map((comment: IComment) => <CommentJsonComponent comment={comment} key={comment.id} />)
            }
        </div>
    );
};

export default CommentsJsonComponent;