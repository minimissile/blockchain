import {ethers} from 'ethers'

(async () => {
  const provider = ethers.getDefaultProvider('ropsten')
  // 获取最新区块
  const blockNumber = await provider.getBlockNumber()
  console.log('block:', blockNumber);
  // block: 10652866

  // 获取以太坊Gas费
  const gasPrice = await provider.getGasPrice()
  console.log('gasPrice2', gasPrice.toString());
  // 2000000001

  // 根据哈希值查询区块信息
  const defaultProvider = ethers.getDefaultProvider()
  const blockHash = "0x7a1d0b010393c8d850200d0ec1e27c0c8a295366247b1bd6124d496cf59182ad";
  const block = await defaultProvider.getBlock(blockHash)
  console.log(block);


})()
