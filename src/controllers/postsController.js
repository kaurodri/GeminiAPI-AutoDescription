import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, resposta) {
    const posts = await getTodosPosts();
    resposta.status(200).json(posts);
};