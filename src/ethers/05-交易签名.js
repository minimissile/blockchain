const {Wallet, utils} = require('ethers')
const privateKey = "0x3141592653589793238462643383279502884197169399375105820974944592"
// 根据私钥加载钱包
const wallet = new Wallet(privateKey)
console.log(wallet.address);

// 签名文本信息
const signPromise = wallet.signMessage('hello World')
signPromise.then(res => {
  console.log(res);
  // 0xf15e5fb49c5438d6a93f0dace1ff4a1589bca865f1db8fbd6a99abf4c5238e69140243fce35de48d77e61092a1a52903917fe5c08d24c1a023359959e23864441b

  // 扩展格式
  console.log(utils.splitSignature(res));
  // {
  //   r: '0xf15e5fb49c5438d6a93f0dace1ff4a1589bca865f1db8fbd6a99abf4c5238e69',
  //   s: '0x140243fce35de48d77e61092a1a52903917fe5c08d24c1a023359959e2386444',
  //   _vs: '0x140243fce35de48d77e61092a1a52903917fe5c08d24c1a023359959e2386444',
  //   recoveryParam: 0,
  //   v: 27
  // }
})

// 签名二进制信息
const hash = "0x3ea2f1d0abf3fc66cf29eebb70cbd4e7fe762ef8a09bcc06c8edf641230afec0";
let binaryData = utils.arrayify(hash);

const signPromise2 = wallet.signMessage(binaryData)
signPromise2.then(res => {
  console.log(res);
})
