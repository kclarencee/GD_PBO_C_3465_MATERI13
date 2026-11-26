const penyerang = {
    serang() {
        console.log(this.nama + " menyerang musuh.")
    }
}

const penyembuh = {
    sembuhkan() {
        console.log(this.nama + " menyembuhkan rekan.")
    }
}

const pelindung = {
    bertahan() {
        console.log(this.nama + " mengangkat perisai.")
    }
};

function applyCapabilities(Kelas, ...kemampuan) {
    Object.assign(Kelas.prototype, ...kemampuan)
}

class Ksatria {
    constructor(nama) {
        this.nama = nama
    }
}

class Penyihir {
    constructor(nama) {
        this.nama = nama
    }
}

applyCapabilities(Ksatria, penyerang, pelindung)
applyCapabilities(Penyihir, penyembuh)

const ksatria = new Ksatria("Ksatria_3465")
const penyihir = new Penyihir("Penyihir_3465")

ksatria.serang()
ksatria.bertahan()
penyihir.sembuhkan();
console.log("Penyihir_3465 bisa menyerang? " + (typeof penyihir.serang === "function"));
console.log("Ksatria_3465 bisa menyembuhkan? " + (typeof ksatria.sembuhkan === "function"));