import type {FC} from "react";
import type {ICommentsDummy} from "../../../models/CommentsDummyJson/ICommentsDummy.ts";

type CommentDummyPropType={
    comment: ICommentsDummy;
}

const CommentDummyComponent:FC<CommentDummyPropType> = ({comment}) => {
    return (
        <div className='bg-sky-500 rounded-xl m-4 p-4'>
            <div>{comment.id}</div>
            <div>{comment.body}</div>
            <div>{comment.postId}</div>
            <div>{comment.likes}</div>
            <div>{comment.user.id}</div>
            <div>{comment.user.username}</div>
            <div>{comment.user.fullName}</div>
        </div>
    );
};

export default CommentDummyComponent;