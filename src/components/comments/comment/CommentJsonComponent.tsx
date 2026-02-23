import type {FC} from "react";
import type {IComment} from "../../../models/CommentsJsonPlaceHolder/IComment.ts";

type CommentJsonPropType={
    comment: IComment;
}

export const CommentJsonComponent:FC<CommentJsonPropType> = ({comment}) => {
    return (
        <div className='bg-sky-500 rounded-xl m-4 p-4'>
            <div>{comment.postId}</div>
            <div>{comment.id}</div>
            <div>{comment.name}</div>
            <div>{comment.email}</div>
            <div>{comment.body}</div>
        </div>
    );
};

export default CommentJsonComponent;