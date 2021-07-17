import {ethers} from 'ethers'

// 根据测试链网络名称获取相关信息
const network = ethers.providers.getNetwork('ropsten')
console.log(network);
// {
//   name: 'ropsten',
//   chainId: 3,
//   ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
//   _defaultProvider: [Function: func] { renetwork: [Function (anonymous)] }
// }

