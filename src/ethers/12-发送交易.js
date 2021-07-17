import {ethers} from 'ethers'

// 钱包私钥
const privateKey = '0xd2d5ecbbd44afa6d2bb6426ef29c9d9a86dbcde8df68830cf549c06bf018a77f';

// 获取节点提供者
const provider = ethers.getDefaultProvider('ropsten')

// 连接钱包
const wallet = new ethers.Wallet(privateKey, provider)

// console.log(wallet);

// 交易信息
let transaction = {
  to: "ricmoo.firefly.eth",
  value: ethers.utils.parseEther("0.1")
}

const sendTransactionPromise = wallet.sendTransaction(transaction)

sendTransactionPromise.then(async res => {
  console.log(res);
  const balance = await wallet.getBalance()
  console.log('balance', ethers.utils.formatEther(balance));
})
