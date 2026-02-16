import type {FC} from "react";
import type {IComment} from "../../model/IComment.ts";

type CommentPropType ={
    comment: IComment;
}

export const CommentComponent: FC<CommentPropType> = ({comment}) => {
    return (
        <div>
            <h1>{comment.name}</h1>
            <h3>{comment.email}</h3>
            <div>{comment.body}</div>
            <div>
                <div>{comment.postId}</div>
                <div>{comment.id}</div>
            </div>
        </div>
    );
};
export default CommentComponent;