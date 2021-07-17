import {ethers, utils} from 'ethers'
const mnemonic = "energy differ hurt borrow initial kiss shop hidden clock process local expose";

const wallet = ethers.Wallet.fromMnemonic(mnemonic)

console.log('address: ', wallet.address)
// address:  0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9

// 使用非英语语言环境词表加载（路径“null”将使用默认值）
let secondMnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic, null, ethers.wordlists.en);
console.log('secondMnemonicWallet', secondMnemonicWallet);
