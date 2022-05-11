const StudentsController = require("./../../lib/controllers/StudentsController");
const Reader = require("./../../lib/utils/Reader");
const students = Reader.readJsonFile("visualpartners.json");

describe("Test de StudentController", () =>{
    test("1) Test del método getAllStudents()", () =>{
        const studetsTest = StudentsController.getAllStudents(students);
        expect(studetsTest.length).toBe(51);
    }); 
    test("2) Test del método getStudentsCertifications", ()=>{
        const studetsTest = StudentsController.getStudentsByCertifications(students);
        expect(studetsTest.length).toBe(29);
    });
    test("3) Test del método filterByCredits", ()=>{
        const studetsCredits = StudentsController.getStudentsByCredits(students);
        expect(studetsCredits.length).toBe(27);});
});