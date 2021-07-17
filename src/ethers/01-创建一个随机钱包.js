const ethers = require('ethers')

const randomWallet = ethers.Wallet.createRandom({
  locale: 'zh_cn'
})

console.log(randomWallet.mnemonic);
// Wallet {
//     _isSigner: true,
//     _signingKey: [Function (anonymous)],
//     address: '0xFA862F542fa928895E5eC437a9886568c3255A65',
//     _mnemonic: [Function (anonymous)],
//     provider: null
// }

console.log(randomWallet.mnemonic);
// {
//   phrase: '撞 授 集 惨 辩 支 谢 巷 介 扫 各 央',
//     path: "m/44'/60'/0'/0/0",
//   locale: 'zh_cn'
// }
