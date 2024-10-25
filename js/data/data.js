import {audioPath, imgPath} from '../config.js'
import Method from '../method/method.js'


// imgs
const uiImgs = [
    {name: 'deemo', path: imgPath + 'deemo.png'},
    {name: 'hololive', path: imgPath + 'hololive.png'},
    {name: 'select_difficulty_bg', path: imgPath + 'song_select_difficulty_bg_easy.png'},
    {name: 'select_difficulty', path: imgPath + 'song_select_difficulty_easy.png'},
    {name: 'select_mask', path: imgPath + 'song_select_easy_mask.png'},
    {name: 'select_flare_beam', path: imgPath + 'song_select_flare_beam.png'},
    {name: 'select_flare', path: imgPath + 'song_select_flare.png'},
    {name: 'select_namebar', path: imgPath + 'song_select_namebar.png'},
    {name: 'select_scorebar', path: imgPath + 'song_select_scorebar_easy.png'},
]


// playlist
const playlist = [
    {
        audioPath: audioPath + 'kami_yamada.ogg',
        bgPath: imgPath + 'bg.jpg',
        logoPath: imgPath + 'holox_logo.png',
        color: 0x936cc6,
        name: 'Oasis Music',
        vocal: 'Oasis',
        composer: 'Oasis',
        type: 1,
    },
    {
        audioPath: audioPath + 'kami_yamada.ogg',
        bgPath: imgPath + 'kami_yamada.jpg',
        logoPath: imgPath + 'holox_logo.png',
        color: 0x936cc6,
        name: 'Don\'t look back in anger',
        vocal: 'Oasis',
        composer: 'Oasis',
        type: 0,
    },
    {
        audioPath: audioPath + 'kami_seffyna.ogg',
        bgPath: imgPath + 'kami_seffyna.jpg',
        logoPath: imgPath + 'seffyna_logo.png',
        color: 0xff1e2e,
        name: 'Wonderwall',
        vocal: 'Oasis',
        composer: 'Oasis',
        type: 1,
    },
    {
        audioPath: audioPath + 'ranbu_suisei.ogg',
        bgPath: imgPath + 'ranbu_suisei.jpg',
        logoPath: imgPath + 'suisei_logo.png',
        color: 0x2073ff,
        name: 'Whatever',
        vocal: 'Oasis',
        composer: 'Oasis',
        type: 1,
    },
    {
        audioPath: audioPath + 'kakusei_suisei.ogg',
        bgPath: imgPath + 'kakusei_suisei.jpg',
        logoPath: imgPath + 'suisei_logo.png',
        color: 0xe10d90,
        name: 'Live Forever',
        vocal: 'Oasis',
        composer: 'Oasis',
        type: 2,
    },
    {
        audioPath: audioPath + 'phony_chima.ogg',
        bgPath: imgPath + 'phony_chima.jpg',
        logoPath: imgPath + 'nijisanji_logo.png',
        color: 0x196cff,
        name: 'She\'s electric',
        vocal: 'Oasis',
        composer: 'Oasis',
        type: 2,
    },
    {
        audioPath: audioPath + 'phony_suisei.ogg',
        bgPath: imgPath + 'phony_suisei.jpg',
        logoPath: imgPath + 'suisei_logo.png',
        color: 0x20a8e9,
        name: 'Supersonic',
        vocal: 'Oasis',
        composer: 'Oasis',
        type: 1,
    },
    {
        audioPath: audioPath + 'king_chima.ogg',
        bgPath: imgPath + 'king_chima.jpg',
        logoPath: imgPath + 'nijisanji_logo.png',
        color: 0xffec00,
        name: 'Up in the Sky',
        vocal: 'Oasis',
        composer: 'Oasis',
        type: 1,
    },
    {
        audioPath: audioPath + 'king_suisei.ogg',
        bgPath: imgPath + 'king_suisei.jpg',
        logoPath: imgPath + 'suisei_logo.png',
        color: 0x426aff,
        name: 'Married With Children',
        vocal: 'Oasis',
        composer: 'Oasis',
        type: 0,
    },
    {
        audioPath: audioPath + 'error_towa.ogg',
        bgPath: imgPath + 'error_towa.jpg',
        logoPath: imgPath + 'towa_logo.png',
        color: 0xb55fea,
        name: 'ShakerMaker',
        vocal: 'Oasis',
        composer: 'Oasis',
        type: 1,
    },
    {
        audioPath: audioPath + 'sparkle_mio.ogg',
        bgPath: imgPath + 'sparkle_mio.jpg',
        logoPath: imgPath + 'mio_logo.png',
        color: 0x449cff,
        name: 'All around the World',
        vocal: 'Oasis',
        composer: 'Oasis',
        type: 2,
    },
    {
        audioPath: audioPath + 'goodbye_aqua.ogg',
        bgPath: imgPath + 'goodbye_aqua.jpg',
        logoPath: imgPath + 'aqua_logo.png',
        color: 0xfbdd97,
        name: 'Don\'t go away',
        vocal: 'Oasis',
        composer: 'Oasis',
        type: 1
    },
    {
        audioPath: audioPath + 'animal_suisei_miko.ogg',
        bgPath: imgPath + 'animal_suisei_miko.jpg',
        logoPath: imgPath + 'suisei_miko_logo.png',
        color: 0xff2786,
        name: 'Champagne Supernova',
        vocal: 'Oasis',
        composer: 'Oasis',
        type: 1
    },
    {
        audioPath: audioPath + 'alien_sora.ogg',
        bgPath: imgPath + 'alien_sora.jpg',
        logoPath: imgPath + 'hololive_logo.png',
        color: 0xf23e58,
        name: 'Talk Tonight',
        vocal: 'Oasis',
        composer: 'Oasis',
        type: 2
    }
].map((e, i) => ({...e, isHome: i === 0 ? true : false}))


const ids = playlist.map(e => Method.uuidv4())


export {playlist, ids, uiImgs}