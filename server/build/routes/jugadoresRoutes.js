"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todosJugadores = [
    //-----------------------------ARGENTINA
    {
        id: 1,
        nombre: "Lionel",
        apellido: "Messi",
        seleccion: "Argentina",
        region: "CONMEBOL",
        imagen: "https://cdn.sofifa.net/players/158/023/23_120.png"
    },
    {
        id: 2,
        nombre: "Angel Di Maria",
        apellido: "Hernández",
        seleccion: "Argentina",
        region: "CONMEBOL",
        imagen: "https://cdn.sofifa.net/players/183/898/23_120.png"
    },
    {
        id: 3,
        nombre: "Paulo",
        apellido: "Dybala",
        seleccion: "Argentina",
        region: "CONMEBOL",
        imagen: "https://cdn.sofifa.net/players/211/110/23_120.png"
    },
    {
        id: 4,
        nombre: "Damián",
        apellido: "Martínez",
        seleccion: "Argentina",
        region: "CONMEBOL",
        imagen: "https://cdn.sofifa.net/players/202/811/23_120.png"
    },
    {
        id: 5,
        nombre: "Gonzalo",
        apellido: "Higuaín",
        seleccion: "Argentina",
        region: "CONMEBOL",
        imagen: "https://cdn.sofifa.net/players/167/664/23_120.png"
    },
    //-----------------------------Italy
    {
        id: 6,
        nombre: "Gianluigi",
        apellido: "Donnarumma",
        seleccion: "Italy",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/230/621/23_120.png"
    },
    {
        id: 7,
        nombre: "Giacomo",
        apellido: "Giacomo",
        seleccion: "Italy",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/253/002/23_120.png"
    },
    {
        id: 8,
        nombre: "Ciro",
        apellido: "Immobile",
        seleccion: "Italy",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/192/387/23_120.png"
    },
    {
        id: 9,
        nombre: "Leonardo",
        apellido: "Spinazzola",
        seleccion: "Italy",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/202/884/23_120.png"
    },
    {
        id: 10,
        nombre: "Marco",
        apellido: "Verratti",
        seleccion: "Italy",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/199/556/23_120.png"
    },
    //-----------------------------Spain
    {
        id: 11,
        nombre: "Jordi",
        apellido: "Ramos",
        seleccion: "Spain",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/189/332/23_60.png"
    },
    {
        id: 12,
        nombre: "Daniel",
        apellido: "Ramos",
        seleccion: "Spain",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/204/963/23_120.png"
    },
    {
        id: 13,
        nombre: "Sergio",
        apellido: "Ramos",
        seleccion: "Spain",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/155/862/23_120.png"
    },
    {
        id: 14,
        nombre: "David",
        apellido: "Silva",
        seleccion: "Spain",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/168/542/23_120.png"
    },
    {
        id: 15,
        nombre: "Marco",
        apellido: "Asensio",
        seleccion: "Spain",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/220/834/23_120.png"
    },
    //-----------------------------Portugal
    {
        id: 16,
        nombre: "Cristiano",
        apellido: "Ronaldo",
        seleccion: "Portugal",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/020/801/23_120.png"
    },
    {
        id: 17,
        nombre: "Bernardo",
        apellido: "Silva",
        seleccion: "Portugal",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/218/667/23_120.png"
    },
    {
        id: 18,
        nombre: "Bruno",
        apellido: "Fernandes",
        seleccion: "Portugal",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/212/198/23_120.png"
    },
    {
        id: 19,
        nombre: "Diogo",
        apellido: "Teixeira",
        seleccion: "Portugal",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/224/458/23_120.png"
    },
    {
        id: 20,
        nombre: "Kléper",
        apellido: "Ferreira",
        seleccion: "Portugal",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/120/533/23_120.png"
    },
];
class JugadoresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/obtenerJugadores', (req, res) => {
            res.send(todosJugadores);
        });
        this.router.get('/obtenerPorNombre/:nombre', (req, res) => {
            console.log(req.params.nombre);
            const jugador = this.obtenerJugadorNombre(req.params.nombre);
            res.send(jugador);
        });
        this.router.get('/obtenerPorSeleccion/:seleccion', (req, res) => {
            console.log(req.params.seleccion);
            const jugador = this.obtenerJugadorSeleccion(req.params.seleccion);
            res.send(jugador);
        });
        this.router.get('/obtenerPorRegion/:region', (req, res) => {
            console.log(req.params.region);
            const jugador = this.obtenerJugadorRegion(req.params.region);
            res.send(jugador);
        });
    }
    obtenerJugadorNombre(nombreJugador) {
        return todosJugadores.find(dato => dato.nombre == nombreJugador);
    }
    obtenerJugadorSeleccion(nombreSeleccion) {
        let tempo = [];
        for (const jugador of todosJugadores) {
            if (jugador.seleccion == nombreSeleccion) {
                tempo.push(jugador);
            }
        }
        return tempo;
    }
    obtenerJugadorRegion(regionJugador) {
        let tempo = [];
        for (const jugador of todosJugadores) {
            if (jugador.region == regionJugador) {
                tempo.push(jugador);
            }
        }
        return tempo;
    }
}
const JugadoresRouter = new JugadoresRoutes();
exports.default = JugadoresRouter.router;
