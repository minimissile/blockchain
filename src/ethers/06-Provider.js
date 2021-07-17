import Web3 from 'web3'
import {ethers} from 'ethers'

// 可以使用任何标准网络名称做参数：
//  - "homestead"
//  - "rinkeby"
//  - "ropsten"
//  - "kovan"
//  - "goerli"

let provider = ethers.getDefaultProvider('ropsten')

// console.log(provider);

const web3 = new Web3(provider)

let provider2 = new ethers.providers.Web3Provider(web3.currentProvider);
console.log(provider2);
