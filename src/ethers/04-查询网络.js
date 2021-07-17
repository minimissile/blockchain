const ehters = require('ethers')
const bigNumber = require('bignumber.js')

const provider = ehters.getDefaultProvider()

// 私钥
const privateKey = "0x3141592653589793238462643383279502884197169399375105820974944592"
// 通过私钥链接钱包
const wallet = new ehters.Wallet(privateKey, provider)

// 获取钱包余额
wallet.getBalance().then(res=>{
  console.log(new bigNumber(res).toNumber());
})

// 获取交易次数
wallet.getTransactionCount().then((transactionCount) => {
  console.log(111, transactionCount);
});
