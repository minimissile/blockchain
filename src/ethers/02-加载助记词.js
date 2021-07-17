const ethers = require('ethers')
const mnemonic = "radar blur cabbage chef fix engine embark joy scheme fiction master release";

const wallet = ethers.Wallet.fromMnemonic(mnemonic)

console.log('address: ', wallet.address)
// address:  0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9

// 使用非英语语言环境词表加载（路径“null”将使用默认值）
let secondMnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic, null, ethers.wordlists.zh_cn);
console.log('secondMnemonicWallet', secondMnemonicWallet);
