const autos = require("./autos");

let concesionaria = {
    autos: autos,

    buscarAuto: function (patente) {
        let auto = this.autos;
        let autoBuscado = null;

        auto.forEach(function (auto) {
            if (patente == auto.patente) {
                autoBuscado = auto
            }
        })
        return autoBuscado;
    },
    venderAuto: function (patente) {
        let auto = this.buscarAuto(patente);
        if (auto != null) {
            auto.vendido = true;
        }
        return auto;
    },
    autosParaLaVenta: () => {
        temp = autos.filter((auto) => auto.vendido != true);
        return temp;
    },
}



