import {ethers} from 'ethers'

(async () => {
  const provider = ethers.getDefaultProvider('ropsten')
  let contractEnsName = 'registrar.firefly.eth';

  const blockNumber = await provider.getBlockNumber()
  console.log(blockNumber)

  const contractAddress = await provider.resolveName(contractEnsName)
  // console.log(contractAddress); // 0x6fC21092DA55B392b045eD78F4732bff3C580e2c

  // 获取合约代码
  const contractCode = await provider.getCode(contractEnsName) // 可是通过合约ENS或者合约Address获取
  // console.log(contractCode);

  // 获取合同事件日志
  // 合约事件日志查询条件
  let topic = ethers.utils.id("nameRegistered(bytes32,address,uint256)");
  let filter = {
    address: contractEnsName,
    fromBlock: 3313425,
    toBlock: 3313430,
    topics: [topic]
  }

  const logs = await provider.getLogs(filter)

  console.log(logs) 
  // [
  // {
  //   blockNumber: 3313426,
  //   blockHash: '0xe01c1e437ed3af9061006492cb07454eca8561479454a709809b7897f225387d',
  //   transactionIndex: 5,
  //   removed: false,
  //   address: '0x6fC21092DA55B392b045eD78F4732bff3C580e2c',
  //   data: '0x00000000000000000000000053095760c154a1531a69fc718119d14c4aa1506f000000000000000000000000000000000000000000000000016345785d8a0000',
  //   topics: [
  //     '0x179ef3319e6587f6efd3157b34c8b357141528074bcb03f9903589876168fa14',
  //     '0xe625ed7b108857745d1d9889a7ae05861d8aee38e0e92fd3a31191de01c2515b'
  //   ],
  //   transactionHash: '0x61d641aaf3dcf4cf6bafc3e79d332d8773ea0688f87eb00f8b60c3f0050e55f0',
  //   logIndex: 5
  // }
  // ]
})()
