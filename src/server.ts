import creteApp from "./app";

const app = creteApp();
const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`rodando na porta ${port}`));
