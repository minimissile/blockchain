import {ethers, utils} from 'ethers'

// 方式一
const wallet = ethers.Wallet.createRandom()
const randomMnemonic = wallet.mnemonic
// console.log(randomMnemonic);
// {
//   phrase: 'fiber erase cloth eagle print core usual stadium helmet move pulp cloud',
//     path: "m/44'/60'/0'/0/0",
//   locale: 'en'
// }


// 方式二

//   - 16 bytes => 12 words (* this example)
//   - 20 bytes => 15 words
//   - 24 bytes => 18 words
//   - 28 bytes => 21 words
//   - 32 bytes => 24 words
let bytes = ethers.utils.randomBytes(16);

// Select the language:
//   - en, es, fr, ja, ko, it, zh_ch, zh_tw
let language = ethers.wordlists.en;

let randomMnemonic1 = ethers.utils.entropyToMnemonic(bytes, language)
console.log(randomMnemonic1);
// energy differ hurt borrow initial kiss shop hidden clock process local expose

