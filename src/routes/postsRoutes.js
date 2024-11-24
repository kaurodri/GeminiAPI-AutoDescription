import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizaNovoPost } from "../controllers/postsController.js";

//! - Para importar pro Front-End
//import cors from "cors";
//const corsOptions = {
//  origin: 'http://localhost:8000',
//  optionsSuccessStatus: 200
//}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    app.use(express.json());
    //! - Para importar pro Front-End
    //app.use(cors(corsOptions));

    app.get('/posts', listarPosts);

    app.post('/posts', postarNovoPost);

    app.post('/upload', upload.single('imagem'), uploadImagem);

    app.put('/upload/:id', atualizaNovoPost);
};

export default routes;