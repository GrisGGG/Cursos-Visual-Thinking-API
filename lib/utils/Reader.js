//Se agrega el módulo fs para leer archivos
const fs = require("fs");

class Reader {
    static readJsonFile(path){
        // readFileSync: función de fs que lee el archivo de como sincrona
        const rawdata = fs.readFileSync(path);
        //JSON.parse pasa el archivo leído a un archivo tipo JSON
        return JSON.parse(rawdata)
    }
}