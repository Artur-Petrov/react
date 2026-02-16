import type {IComment} from "../model/IComment.ts";

export const getComments = async (): Promise<IComment[]> => {
    return await fetch(import.meta.env.VITE_URL_API)
        .then((response) => response.json())
}