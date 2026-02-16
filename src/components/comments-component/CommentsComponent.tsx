import {useEffect, useState} from "react";
import type {IComment} from "../../model/IComment.ts";
import {getComments} from "../../service/api.service.ts";
import CommentComponent from "../comment-component/CommentComponent.tsx";

export const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getComments()
            .then((comments) => {
                setComments(comments);
            });
    }, []);

    return (
        <>
            {
                comments.map((comment: IComment) => <CommentComponent comment={comment} key={comment.id} />)
            }
        </>
    );
};
export default CommentsComponent;