import express from "express";

const app = express();
app.listen(3000, () => {
    console.log('vitin escutando...');
});

app.get('/api', (req, res) => {
    let resposta = res;
    resposta.status(200).send('erizin e little vitty');
});