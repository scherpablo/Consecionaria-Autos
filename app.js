const appAutos = require("./index");

let argumento = process.argv[2];

switch (argumento) {
    case "buscar":
        let acciones = appAutos.buscarAuto();
        acciones.forEach(accion => {
            console.log("- marca: " + accion.marca);
        });
        break;
}
