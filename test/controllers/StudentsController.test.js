const StudentsController = require('./../../lib/controllers/StudentsController');
const Reader = require('./../../lib/utils/Reader')
const students = Reader.readJsonFile("visualpartners.json")

describe("Test de StudentController", () =>{
    test("1) Test del método getAllStudents()", () =>{
        const studetsTest = StudentsController.getAllStudents(students);
        expect(studetsTest.length).toBe(51);
    }) 
});