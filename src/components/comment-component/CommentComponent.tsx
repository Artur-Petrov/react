import type {FC} from "react";
import type {IComment} from "../../model/IComment.ts";

type CommentPropType ={
    comment: IComment;
}

export const CommentComponent: FC<CommentPropType> = ({comment}) => {
    return (
        <div className='bg-sky-600 m-5 p-5 rounded-2xl'>
            <h1>{comment.id}</h1>
            <h3>{comment.body}</h3>
            <div>{comment.postId}</div>
            <div>{comment.likes}</div>
            <div>
                <div>{comment.user.id}</div>
                <div>{comment.user.fullName}</div>
                <div>{comment.user.username}</div>
            </div>
        </div>
    );
};
export default CommentComponent;