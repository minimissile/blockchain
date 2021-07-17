const ethers = require('ethers')
const walletJson = require('./json/wallet.json')

const json = JSON.stringify(walletJson)
const pwd = 'foo'

ethers.Wallet.fromEncryptedJson(json, pwd).then(res => {
  console.log('address: ', res.address);
  // address 0x88a5C2d9919e46F883EB62F7b8Dd9d0CC45bc290
})

