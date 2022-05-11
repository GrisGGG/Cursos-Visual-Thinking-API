const Reader = require('./../../lib/utils/Reader');
const students = Reader.readJsonFile("visualpartners.json");

describe("Test de la clase Reader", () =>{
    test("1) Comprobado estudiantes", ()=>{
        expect(students).not.toBeUndefined();
    });
});

