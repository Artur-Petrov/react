import type {IComment} from "../model/IComment.ts";
import type {IResponseComment} from "../model/IResponseComment.ts";

export const getComments = async (): Promise<IComment[]> => {
    const responseCommnets: IResponseComment = await fetch(import.meta.env.VITE_URL_API + '/comments')
        .then((response) => response.json())
    return responseCommnets.comments
}