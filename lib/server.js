const StudentController = require("./controllers/StudentsController");
const express = require("express");
const app = express();

app.use(express.json());
const port =3000;

app.get("/", (request, response) =>{
    response.json({message: "Prueba, Visualpartner Api"});
});

app.listen(port, () => {
    console.log(`Visualpartner Api: ${port}`);
});
