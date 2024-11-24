import { getTodosPosts, criarPost} from "../models/postsModel.js";
import fs from "fs";

export async function listarPosts(req, resposta) {
    const posts = await getTodosPosts();
    resposta.status(200).json(posts);
};

export async function postarNovoPost(req, resposta) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        resposta.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        resposta.status(500).json({'Erro':'Falha na requisição'})
    }
};

export async function uploadImagem(req, resposta) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        resposta.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        resposta.status(500).json({'Erro':'Falha na requisição'})
    }
};