class Usuarios {
    constructor() {
        this.personas = [];
    }
    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };
        this.personas.push(persona);
        return this.personas;
    }
    getPersona(id) {
        let p = this.personas.filter(p => p.id === id)[0];
        return p;
    }
    getPersonas() { return this.personas; }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(p => p.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter(p => p.id !== id);
        console.log(this.personas);
        return personaBorrada;
    }
}

module.exports = { Usuarios }