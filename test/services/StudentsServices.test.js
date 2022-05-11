const StudentsServices = require("./../../lib/services/StudentsServices");

describe("Test del archivo StudentsServices", ()=>{
    test("1) Test del método listOfStudents", ()=>{
        const students = [{"id":1, "haveCertification": true}, {"id":2, "haveCertification": false}];
        const studetsTest = StudentsServices.listOfStudents(students);
        expect(studetsTest.length).toBe(2);
    });
    test("2) Test del método filterByCertification", ()=>{
        const students = [{"id":1, "haveCertification": true}, {"id":2, "haveCertification": true}];
        const studetsTest = StudentsServices.filterByCertification(students);
        expect(studetsTest.length).toBe(2);
    });
    test("3) Test del método filterByCredits", ()=>{
        const students = [{"id":1, "haveCertification": true, "credits": 100}, {"id":2, "haveCertification": true, "credits": 600}];
        const studetsCredits = StudentsServices.filterByCredits(students);
        expect(studetsCredits.length).toBe(1);
    });
});