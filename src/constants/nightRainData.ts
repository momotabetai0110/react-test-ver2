import gladeus from "../assets/Gladeus.jpg";
import adel from "../assets/Adel.avif";
import gnoster from "../assets/Gnoster.avif";
import maris from "../assets/Maris.avif";
import libra from "../assets/Libra.avif";
import fulghor from "../assets/Fulghor.avif";
import caligo from "../assets/Caligo.avif";
import harmonia from "../assets/Harmonia.avif";
import straghess from "../assets/Straghess.avif";
import nameless from "../assets/Nameless.avif";

export const BOSSES: Record<number, { name: string; img: string }> = {
  1: {
    name: "グラディウス",
    img: gladeus,
  },
  2: {
    name: "エデレ",
    img: adel,
  },
  3: {
    name: "グノスター",
    img: gnoster,
  },
  4: {
    name: "マリス",
    img: maris,
  },
  5: {
    name: "リブラ",
    img: libra,
  },
  6: {
    name: "フルゴール",
    img: fulghor,
  },
  7: {
    name: "カリゴ",
    img: caligo,
  },
  8: {
    name: "ハルモニア",
    img: harmonia,
  },
  9: {
    name: "ストラゲス",
    img: straghess,
  },
  10: {
    name: "ナメレス",
    img: nameless,
  },
} as const;

export const TERRAINS: Record<number, string> = {
  0: "なし",
  1: "火口",
  2: "腐れ森",
  3: "山嶺",
  4: "隠れ都",
  5: "大空洞",
} as const;
