export interface IComment {
    id: number,
    body: string,
    postId: number,
    likes: number,
    user: ICommentsUser
}
export interface ICommentsUser {
    id: number,
    username: string,
    fullName: string
}