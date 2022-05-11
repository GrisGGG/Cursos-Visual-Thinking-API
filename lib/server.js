const StudentController = require("./controllers/StudentsController");
const express = require("express");
const app = express();

app.use(express.json());
const port =4000;

app.get("/", (request, response) =>{
    response.json({message: "Prueba, Visualpartner Api"});
});

app.get("/v1/students", (request, response) =>{
    const listOfStudents = StudentController.getAllStudents();
    response.status(200).json(listOfStudents);
});

app.get("/v1/students/haverCertification/emails", (request, response) =>{
    const listOfEmails = StudentController.getStudentsByCertifications();
    response.status(200).json(listOfEmails);
});

app.get("/v1/students/credits", (request, response) =>{
    const listOfStudentsCredits = StudentController.getStudentsByCredits();
    response.status(200).json(listOfStudentsCredits);
});

app.listen(port, () => {
    console.log(`Visualpartner Api: ${port}`);
});
