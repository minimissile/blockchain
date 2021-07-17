import {ethers} from 'ethers'

(async () => {
  const provider = ethers.getDefaultProvider('ropsten')

  const transactionHash = "0xa4ddad980075786c204b45ab8193e543aec4411bd94894abef47dc90d4d3cc01"


  // 根据交易哈希获取区块信息
  const transaction = await provider.getTransaction(transactionHash)
  // console.log(transaction);

  const transactionReceipt = await provider.getTransactionReceipt(transactionHash)
  console.log(transactionReceipt);


})()
