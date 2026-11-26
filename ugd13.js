class media {
    constructor(nama) {
        this.nama = nama
    }

    info() {
        console.log("media:" + this.nama)
    }
}

class MediaAudio extends media{
    putar(menit) {
        console.log(this.nama + "diputar selama" + menit + "menit.")
    }
}

class Mediabaca extends media {
    baca(halaman) {
        console.log(this.halaman + "dibaca sampai halaman" + halaman + "halaman.")
    }
}

class Podcast extends MediaAudio {}
class Ebook extends Mediabaca {}
class LaguMP3 extends MediaAudio {}

function putarSemua(daftar) {
    daftar.forEach(media => media.putar(10))
}

function bacaSemua(daftar) {
    daftar.forEach(media => media.baca(25))
}

const podcast = new Podcast ("podcast_3465")
const ebook = new Ebook ("Ebook_3465")
const lagu = new LaguMP3 ("Lagu_34650")

podcast.info()
ebook.info()
lagu.info()

putarSemua([podcast, lagu])
bacaSemua([ebook])