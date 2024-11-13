function toggleGuide(){var e=document.getElementById("guideContent");"none"===e.style.display?e.style.display="block":e.style.display="none"}const thaiConsonants="กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ",thaiVowels="ะัาิีึืุูเแโใไๅำ",thaiTonemarks="่้๊๋",thaiSpecials="์ๆฯํ๎",thaiNumerals="๐๑๒๓๔๕๖๗๘๙",thaiChars="กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮะัาิีึืุูเแโใไๅำ่้๊๋์ๆฯํ๎๐๑๒๓๔๕๖๗๘๙",englishChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",specialChars="!@#$%^&*()_+-=[]{}|;:'\",.<>/?`~",fullChars="กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮะัาิีึืุูเแโใไๅำ่้๊๋์ๆฯํ๎๐๑๒๓๔๕๖๗๘๙ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:'\",.<>/?`~",pigpenEmojis=["\uD83D\uDE00","\uD83D\uDE01","\uD83D\uDE02","\uD83E\uDD23","\uD83D\uDE03","\uD83D\uDE04","\uD83D\uDE05","\uD83D\uDE06","\uD83D\uDE09","\uD83D\uDE0A","\uD83D\uDE0B","\uD83D\uDE0E","\uD83D\uDE0D","\uD83D\uDE18","\uD83D\uDE17","\uD83D\uDE19","\uD83D\uDE1A","\uD83D\uDE42","\uD83E\uDD17","\uD83E\uDD29","\uD83E\uDD14","\uD83E\uDD28","\uD83D\uDE10","\uD83D\uDE11","\uD83D\uDE36","\uD83D\uDE44","\uD83D\uDE0F","\uD83D\uDE23","\uD83D\uDE25","\uD83D\uDE2E","\uD83E\uDD10","\uD83D\uDE2F","\uD83D\uDE2A","\uD83D\uDE2B","\uD83D\uDE34","\uD83D\uDE0C","\uD83D\uDE1B","\uD83D\uDE1C","\uD83D\uDE1D","\uD83E\uDD24","\uD83D\uDE12","\uD83D\uDE13","\uD83D\uDE14","\uD83D\uDE15","\uD83D\uDE43","\uD83E\uDD11","\uD83D\uDE32","☹️","\uD83D\uDE41","\uD83D\uDE16","\uD83D\uDE1E","\uD83D\uDE1F","\uD83D\uDE24","\uD83D\uDE22","\uD83D\uDE2D","\uD83D\uDE26","\uD83D\uDE27","\uD83D\uDE28","\uD83D\uDE29","\uD83E\uDD2F","\uD83D\uDE2C","\uD83D\uDE30","\uD83D\uDE31","\uD83E\uDD75","\uD83E\uDD76","\uD83D\uDE33","\uD83E\uDD2A","\uD83D\uDE35","\uD83D\uDE21","\uD83D\uDE20","\uD83E\uDD2C","\uD83D\uDE37","\uD83E\uDD12","\uD83E\uDD15","\uD83E\uDD22","\uD83E\uDD2E","\uD83E\uDD27","\uD83D\uDE07","\uD83E\uDD70","\uD83E\uDD20","\uD83E\uDD21","\uD83E\uDD73","\uD83E\uDD74","\uD83E\uDD7A","\uD83E\uDD25","\uD83E\uDD2B","\uD83E\uDD2D","\uD83E\uDDD0","\uD83E\uDD13","\uD83D\uDE08","\uD83D\uDC7F","\uD83D\uDC79","\uD83D\uDC7A","\uD83D\uDC80","\uD83D\uDC7B","\uD83D\uDC7D","\uD83E\uDD16","\uD83D\uDCA9","\uD83D\uDE3A","\uD83D\uDE38","\uD83D\uDE39","\uD83D\uDE3B","\uD83D\uDE3C","\uD83D\uDE3D","\uD83D\uDE40","\uD83D\uDE3F","\uD83D\uDE3E","\uD83D\uDC36","\uD83D\uDC31","\uD83D\uDC2D","\uD83D\uDC39","\uD83D\uDC30","\uD83E\uDD8A","\uD83D\uDC3B","\uD83D\uDC3C","\uD83D\uDC28","\uD83D\uDC2F","\uD83E\uDD81","\uD83D\uDC2E","\uD83D\uDC37","\uD83D\uDC3D","\uD83D\uDC38","\uD83D\uDC35","\uD83D\uDE48","\uD83D\uDE49","\uD83D\uDE4A","\uD83D\uDC12","\uD83D\uDC14","\uD83D\uDC27","\uD83D\uDC26","\uD83D\uDC24","\uD83D\uDC23","\uD83D\uDC25","\uD83E\uDD86","\uD83E\uDD85","\uD83E\uDD89","\uD83E\uDD87","\uD83D\uDC3A","\uD83D\uDC17","\uD83D\uDC34","\uD83E\uDD84","\uD83D\uDC1D","\uD83D\uDC1B","\uD83E\uDD8B","\uD83D\uDC0C","\uD83D\uDC1E","\uD83D\uDC1C","\uD83E\uDD97","\uD83D\uDD77","\uD83D\uDD78","\uD83E\uDD82","\uD83D\uDC22","\uD83D\uDC0D","\uD83E\uDD8E","\uD83E\uDD96","\uD83E\uDD95","\uD83D\uDC19","\uD83E\uDD91","\uD83E\uDD90","\uD83E\uDD80","\uD83D\uDC21","\uD83D\uDC20","\uD83D\uDC1F","\uD83D\uDC2C","\uD83D\uDC33","\uD83D\uDC0B","\uD83E\uDD88","\uD83D\uDC0A","\uD83D\uDC05","\uD83D\uDC06","\uD83E\uDD93","\uD83E\uDD8D","\uD83D\uDC18","\uD83E\uDD8F","\uD83D\uDC2A","\uD83D\uDC2B","\uD83E\uDD92","\uD83E\uDD98","\uD83D\uDC03","\uD83D\uDC02","\uD83D\uDC04","\uD83D\uDC0E","\uD83D\uDC16","\uD83D\uDC0F","\uD83D\uDC11","\uD83D\uDC10","\uD83D\uDC13","\uD83E\uDD83","\uD83D\uDD4A","\uD83D\uDC07","\uD83D\uDC01","\uD83D\uDC00","\uD83D\uDC3F","\uD83E\uDD94","\uD83D\uDC3E","\uD83D\uDC09","\uD83D\uDC32","\uD83C\uDF35","\uD83C\uDF84","\uD83C\uDF32","\uD83C\uDF33","\uD83C\uDF34","\uD83C\uDF31","\uD83C\uDF3F","☘️","\uD83C\uDF40","\uD83C\uDF8D","\uD83C\uDF8B","\uD83C\uDF43","\uD83C\uDF42","\uD83C\uDF41","\uD83C\uDF44","\uD83C\uDF3E","\uD83D\uDC90","\uD83C\uDF37","\uD83C\uDF39","\uD83E\uDD40","\uD83C\uDF3A","\uD83C\uDF38","\uD83C\uDF3C","\uD83C\uDF3B","\uD83C\uDF1E","\uD83C\uDF1D","\uD83C\uDF1B","\uD83C\uDF1A","\uD83C\uDF1C","\uD83C\uDF19","⭐","\uD83C\uDF1F","\uD83D\uDCAB","✨","⚡","☄️","\uD83D\uDCA5","\uD83D\uDD25","\uD83C\uDF2A","\uD83C\uDF08","☀️","\uD83C\uDF24","⛅","\uD83C\uDF25","☁️","\uD83C\uDF26","\uD83C\uDF27","⛈","\uD83C\uDF29","\uD83C\uDF28","❄️","☃️","⛄","\uD83C\uDF2C","\uD83D\uDCA8","\uD83D\uDCA7","\uD83D\uDCA6","☔","☂️","\uD83C\uDF0A","\uD83C\uDF2B","\uD83C\uDF4F","\uD83C\uDF4E","\uD83C\uDF50","\uD83C\uDF4A","\uD83C\uDF4B","\uD83C\uDF4C","\uD83C\uDF49","\uD83C\uDF47","\uD83C\uDF53","\uD83C\uDF48","\uD83C\uDF52","\uD83C\uDF51","\uD83E\uDD6D","\uD83C\uDF4D","\uD83E\uDD65","\uD83E\uDD5D","\uD83C\uDF45","\uD83C\uDF46","\uD83E\uDD51","\uD83E\uDD66","\uD83E\uDD6C","\uD83E\uDD52","\uD83C\uDF36","\uD83C\uDF3D","\uD83E\uDD55","\uD83E\uDD54","\uD83C\uDF60","\uD83E\uDD50","\uD83C\uDF5E","\uD83E\uDD56","\uD83E\uDD68","\uD83E\uDDC0","\uD83E\uDD5A","\uD83C\uDF73","\uD83E\uDD5E","\uD83E\uDD53","\uD83E\uDD69","\uD83C\uDF57","\uD83C\uDF56","\uD83C\uDF2D","\uD83C\uDF54","\uD83C\uDF5F","\uD83C\uDF55","\uD83E\uDD6A","\uD83E\uDD59","\uD83C\uDF2E","\uD83C\uDF2F","\uD83E\uDD57","\uD83E\uDD58","\uD83C\uDF5D","\uD83C\uDF5C","\uD83C\uDF72","\uD83C\uDF65","\uD83E\uDD60","\uD83C\uDF63","\uD83C\uDF71","\uD83C\uDF5B","\uD83C\uDF5A","\uD83C\uDF59","\uD83C\uDF58","\uD83C\uDF62","\uD83C\uDF61","\uD83C\uDF67","\uD83C\uDF68","\uD83C\uDF66","\uD83E\uDD67","\uD83E\uDDC1","\uD83C\uDF70","\uD83C\uDF82","\uD83C\uDF6E","\uD83C\uDF6D","\uD83C\uDF6C","\uD83C\uDF6B","\uD83C\uDF7F","\uD83C\uDF69","\uD83C\uDF6A","\uD83C\uDF30","\uD83E\uDD5C","\uD83C\uDF6F","\uD83E\uDD5B","\uD83C\uDF7C","☕","\uD83C\uDF75","\uD83E\uDD64","\uD83C\uDF76","\uD83C\uDF7A","\uD83C\uDF7B","\uD83E\uDD42","\uD83C\uDF77","\uD83E\uDD43","\uD83C\uDF78","\uD83C\uDF79","\uD83C\uDF7E","\uD83E\uDD44","\uD83C\uDF74","\uD83C\uDF7D","\uD83E\uDD63","\uD83E\uDD61","\uD83E\uDD62","\uD83D\uDE97","\uD83D\uDE95","\uD83D\uDE99","\uD83D\uDE8C","\uD83D\uDE8E","\uD83C\uDFCE","\uD83D\uDE93","\uD83D\uDE91","\uD83D\uDE92","\uD83D\uDE90","\uD83D\uDE9A","\uD83D\uDE9B","\uD83D\uDE9C","\uD83D\uDEF4","\uD83D\uDEB2","\uD83D\uDEF5","\uD83C\uDFCD","\uD83D\uDEA8","\uD83D\uDE94","\uD83D\uDE8D","\uD83D\uDE98","\uD83D\uDE96","\uD83D\uDEA1","\uD83D\uDEA0","\uD83D\uDE9F","\uD83D\uDE83","\uD83D\uDE8B","\uD83D\uDE9E","\uD83D\uDE9D","\uD83D\uDE84","\uD83D\uDE85","\uD83D\uDE88","\uD83D\uDE82","\uD83D\uDE86","\uD83D\uDE87","\uD83D\uDE8A","\uD83D\uDE89","✈️","\uD83D\uDEEB","\uD83D\uDEEC","\uD83D\uDEE9","\uD83D\uDCBA","\uD83D\uDEF0","\uD83D\uDE80","\uD83D\uDEF8","\uD83D\uDE81","\uD83D\uDEF6","⛵","\uD83D\uDEA4","\uD83D\uDEE5","\uD83D\uDEF3","⛴","\uD83D\uDEA2","⚓","\uD83D\uDEA7","⛽","\uD83D\uDE8F","\uD83D\uDEA6","\uD83D\uDEA5","\uD83D\uDDFA","\uD83D\uDDFF","\uD83D\uDDFD","⛲","\uD83D\uDDFC","\uD83C\uDFF0","\uD83C\uDFEF","\uD83C\uDFA1","\uD83C\uDFA2","\uD83C\uDFA0","⛱","\uD83C\uDFD6","\uD83C\uDFDD","\uD83C\uDF0B","⛰","\uD83C\uDFD4","\uD83D\uDDFB","\uD83C\uDFD5","⛺","\uD83C\uDFE0","\uD83C\uDFE1","\uD83C\uDFD8","\uD83C\uDFDA","\uD83C\uDFD7","\uD83C\uDFED","\uD83C\uDFE2","\uD83C\uDFEC","\uD83C\uDFE3","\uD83C\uDFE4","\uD83C\uDFE5","\uD83C\uDFE6","\uD83C\uDFE8","\uD83C\uDFEA","\uD83C\uDFEB","\uD83C\uDFE9","\uD83D\uDC92","\uD83C\uDFDB","⛪","\uD83D\uDD4C","\uD83D\uDD4D","\uD83D\uDD4B","⛩","\uD83D\uDEE4","\uD83D\uDEE3","\uD83D\uDDFE","\uD83C\uDF91","\uD83C\uDFDE","\uD83C\uDF05","\uD83C\uDF04","\uD83C\uDF20","\uD83C\uDF87","\uD83C\uDF86","\uD83C\uDF07","\uD83C\uDF06","\uD83C\uDFD9","\uD83C\uDF03","\uD83C\uDF0C","\uD83C\uDF09","\uD83C\uDF01"];pigpenEmojis.length<fullChars.length&&alert("จำนวนอิโมจิไม่เพียงพอ กรุณาเพิ่มอิโมจิในอาร์เรย์ pigpenEmojis");const charToEmoji={},emojiToChar={},emojisToUse=pigpenEmojis.slice(0,fullChars.length);for(let i=0;i<fullChars.length;i++)charToEmoji[fullChars[i]]=emojisToUse[i],emojiToChar[emojisToUse[i]]=fullChars[i];function containsEmoji(e){return/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u.test(e)}function processText(){let e=document.getElementById("inputText").value;containsEmoji(e)?document.querySelector('input[value="decode"]').checked=!0:document.querySelector('input[value="encode"]').checked=!0;let t=document.querySelector('input[name="mode"]:checked').value,o="";if("encode"===t)for(let l of e)o+=charToEmoji[l]||l;else{let n=0;for(;n<e.length;){let u=e[n],s=e[n+1];s&&emojiToChar[u+s]&&(u+=s,n++),o+=emojiToChar[u]||u,n++}}document.getElementById("outputText").value=o}function copyResult(){let e=document.getElementById("outputText");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),alert("คัดลอกผลลัพธ์เรียบร้อยแล้ว!")}function clearText(){document.getElementById("inputText").value="",document.getElementById("outputText").value=""}document.getElementById("inputText").addEventListener("input",processText);