const autos = require("./autos");

let concesionaria = {
    autos: autos,

    buscarAuto: function (patente) {
        // for (let i = 0; i < this.autos.length; i++) {
        //     if (this.autos[i].patente == patente) {
        //         return this.autos[i];
        //     }
        // }
        // return null;

        let autoEncontrado = this.autos.find(function (auto) {
            return auto.patente == patente;
        })
        if (autoEncontrado) {
            return autoEncontrado
        } else {
            return null;
        }
    },
    venderAuto: function (patente) {
        let autoEncontrado = this.buscarAuto(patente);
        if (autoEncontrado) {
            autoEncontrado.vendido = true;
        }
        return autoEncontrado;
    },
    autosParaLaVenta: function () {
        let autosFiltrados = this.autos.filter(function (auto) {
            return auto.vendido;
        })
        return autosFiltrados;
    },
    autosNuevos: function () {
        let autosParaVender = this.autosParaLaVenta();
        let autosFiltrados = autosParaVender.filter(function (auto) {
            return auto.km < 100;
        })
        return autosFiltrados;
    },
    listaDeVentas: function () {
        let listado = [];
        this.autos.forEach(function (auto) {
            if (auto.vendido) {
                listado.push(auto.precio)
            }
        })
        return listado;
    },
    totalDeVentas: function () {
        let listado = this.listaDeVentas()
        if (listado.length != 0) {
            let total = listado.reduce(function (acum, value) {
                return acum + value
            }, 0)
            return total;
        } else {
            return 0;
        }
    },
    puedeComprar: function (auto, _perosna) {
        let resultadoCuotas = persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas);
        return persona.capacidadDePagoTotal >= auto.precio && resultadoCuotas;

    },
    autosQuePuedoComprar: function (persona) {
        let autosParaVender = this.autosParaLaVenta();
        let autosParaElCliente = autosParaVender.filter(function (auto) {
            return consecionaria.puedeComprar(auto, persona);
        })
        return autosParaElCliente;
    }
}

// console.log(concesionaria.totalDeVentas());





