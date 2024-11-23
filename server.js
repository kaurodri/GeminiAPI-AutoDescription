import express from "express";

const posts = [
    {
        id : 1,
        descricao : 'sua melhor foto',
        imagem : 'https://placecats.com/millie/300/150'
    },
    {
        id : 2,
        descricao : 'sua pior foto',
        imagem : 'https://placecats.com/millie/300/150'
    },
    {
        id : 3,
        descricao : 'uma foto antiga',
        imagem : 'https://placecats.com/millie/300/150'
    },
    {
        id : 4,
        descricao : 'uma foto fechação!',
        imagem : 'https://placecats.com/millie/300/150'
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('vitin escutando...');
});

app.get('/posts', (req, res) => {
    let resposta = res;
    resposta.status(200).json(posts);
});

function buscar(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
};

app.get('/posts/:id', (req, res) => {
    let resposta = res;
    const index = buscar(req.params.id);
    resposta.status(200).json(posts[index]);
});