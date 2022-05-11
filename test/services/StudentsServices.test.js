const StudentsServices = require('./../../lib/services/StudentsServices');
const Reader = require('./../../lib/utils/Reader');
const students = Reader.readJsonFile("visualpartners.json");

describe("Test del archivo StudentsServices", ()=>{
    test("1) Test del método listOfStudents", ()=>{
        const studetsTest = StudentsServices.listOfStudents(students);
        expect(studetsTest.length).toBe(51)
    });
});