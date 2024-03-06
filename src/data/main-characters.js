// Pictures
import jonathanJoestart from "./../assets/images/characters/jonathan-joestar.png";
import josephJoestart from "./../assets/images/characters/joseph-joestar.png";
import jotaroKujo from "./../assets/images/characters/jotaro-star-platinum.png";
import josukeHigashikata from "./../assets/images/characters/josuke-crazy-diamond.png";
import giornoGiovanna from "./../assets/images/characters/giorno-gold-experience.png";
import jolyneKujo from "./../assets/images/characters/jolyne-stone-free.png";
// Voice lines
import jonathanVoiceLine from "./../assets/voice-lines/jonathan-voice-line.wav";
import josephVoiceLine from "./../assets/voice-lines/joseph-voice-line.wav";
import jotaroVoiceLine from "./../assets/voice-lines/jotaro-voice-line.wav";
import josukeVoiceLine from "./../assets/voice-lines/josuke-voice-line.wav";
import giornoVoiceLine from "./../assets/voice-lines/giorno-voice-line.webm";
import jolyneVoiceLine from "./../assets/voice-lines/jolyne-voice-line.wav";
// Songs
// Phantom Blood.
import sonoChinoSadame from "./../assets/songs/01/sonoChinoSadame.webm";
import roundabout from "./../assets/songs/01/yesRoundabout.webm";
// Battle Tendency.
import bloodyStream from "./../assets/songs/02/bloodyStream.webm";
import pillarMenTheme from "./../assets/songs/02/pillarMenTheme.webm";
// Stardust Crusaders.
import standProud from "./../assets/songs/03/standProud.webm";
import endOfTheWorld from "./../assets/songs/03/end-of-the-world.webm";
import startdustCrusadersOST from "./../assets/songs/03/stardust-crusaders-ost.webm";
// Diamond Is Unbreakable.
import crazyNoisyBizarreTown from "./../assets/songs/04/crazyNoisyBizarreTown.webm";
import greatDays from "./../assets/songs/04/greatDays.webm";
import killer from "./../assets/songs/04/killer.webm";
import moriohChoRadio from "./../assets/songs/04/moriohChoRadio.webm";
// Vento Aureo.
import canzoniPreferite from "./../assets/songs/05/canzoniPreferite.webm";
import fightingGold from "./../assets/songs/05/fightingGold.webm";
import ilVentoDoro from "./../assets/songs/05/ilVentoDoro.webm";
import uragirimonoNoRequiem from "./../assets/songs/05/uragirimonoNoRequiem.webm";
// Stone Ocean
import heavenFallingDown from "./../assets/songs/06/heavenFallingDown.webm";
import stoneOcean from "./../assets/songs/06/stoneOcean.webm";
// Gifs
import phantomBloodWinGif from "/gifs/01-phantomBlood/jojo-dio-handshake.gif";
import phantomBloodLoseGif from "/gifs/01-phantomBlood/dio-punches-jojo.gif";
import battleTendencyWinGif from "/gifs/02-battleTendency/jojo&caesar.gif";
import battleTendencyLoseGif from "/gifs/02-battleTendency/esidisi-crying.gif";
import stardustCrusadersWinGif from "/gifs/03-stardustCrusaders/polnareff.gif";
import stardustCrusadersLoseGif from "/gifs/03-stardustCrusaders/rero-rero-rero.gif";
import diamondIsUnbreakableWinGif from "/gifs/04-diamondIsUnbreakable/jotaro.gif";
import diamondIsUnbreakableLoseGif from "/gifs/04-diamondIsUnbreakable/kira-explosion.webp";
import ventoAureoWinGif from "/gifs/05-ventoAureo/torture-dance.gif";
import ventoAureoLoseGif from "/gifs/05-ventoAureo/jo-jo-gang.gif";
import stoneOceanWinGif from "/gifs/06-stoneOcean/gwess.webp";
import stoneOceanLoseGif from "/gifs/06-stoneOcean/white-snake.gif";

const mainCharacters = [
    {
        season: "Phantom Blood",
        name: "Jonathan Joestar",
        picture: jonathanJoestart,
        voiceLine: jonathanVoiceLine,
        backgroundColor: "#a057dcaa",
        songs: [
            {
                name: "Sono Chino Sadame",
                audio: sonoChinoSadame,
            },
            {
                name: "Yes - Roundabout",
                audio: roundabout,
            },
        ],
        gifs: {
            win: phantomBloodWinGif,
            lose: phantomBloodLoseGif,
        },
    },
    {
        season: "Battle tendency",
        name: "Joseph Joestar",
        picture: josephJoestart,
        voiceLine: josephVoiceLine,
        backgroundColor: "#58db8baa",
        songs: [
            {
                name: "Bloody Stream",
                audio: bloodyStream,
            },
            {
                name: "Pillar Men Theme",
                audio: pillarMenTheme,
            },
        ],
        gifs: {
            win: battleTendencyWinGif,
            lose: battleTendencyLoseGif,
        },
    },
    {
        season: "Stardust Crusaders",
        name: "Jotaro Kujo",
        picture: jotaroKujo,
        voiceLine: jotaroVoiceLine,
        backgroundColor: "#1bd9f1aa",
        songs: [
            {
                name: "Stand Proud",
                audio: standProud,
            },
            {
                name: "End of the world",
                audio: endOfTheWorld,
            },
            {
                name: "Stardust Crusaders OST",
                audio: startdustCrusadersOST,
            },
        ],
        gifs: {
            win: stardustCrusadersWinGif,
            lose: stardustCrusadersLoseGif,
        },
    },
    {
        season: "Diamond Is Unbreakable",
        name: "Josuke Higashikata",
        picture: josukeHigashikata,
        voiceLine: josukeVoiceLine,
        backgroundColor: "#feee12aa",
        songs: [
            {
                name: "Crazy Noisy Bizarre Town",
                audio: crazyNoisyBizarreTown,
            },
            {
                name: "Great Days",
                audio: greatDays,
            },
            {
                name: "Killer",
                audio: killer,
            },
            {
                name: "Morioh Cho Radio",
                audio: moriohChoRadio,
            },
        ],
        gifs: {
            win: diamondIsUnbreakableWinGif,
            lose: diamondIsUnbreakableLoseGif,
        },
    },
    {
        season: "Vento Aureo",
        name: "Giorno Giovanna",
        picture: giornoGiovanna,
        voiceLine: giornoVoiceLine,
        backgroundColor: "#dc5856aa",
        songs: [
            {
                name: "Canzoni Preferite",
                audio: canzoniPreferite,
            },
            {
                name: "Fighting Gold",
                audio: fightingGold,
            },
            {
                name: "Il Vento D'oro",
                audio: ilVentoDoro,
            },
            {
                name: "Uragirimono No Requiem",
                audio: uragirimonoNoRequiem,
            },
        ],
        gifs: {
            win: ventoAureoWinGif,
            lose: ventoAureoLoseGif,
        },
    },
    {
        season: "Stone Ocean",
        name: "Jolyne Kujo",
        picture: jolyneKujo,
        voiceLine: jolyneVoiceLine,
        backgroundColor: "#5c77deaa",
        songs: [
            {
                name: "Heaven Falling Down",
                audio: heavenFallingDown,
            },
            {
                name: "Stone Ocean",
                audio: stoneOcean,
            },
        ],
        gifs: {
            win: stoneOceanWinGif,
            lose: stoneOceanLoseGif,
        },
    },
];

export default mainCharacters;
