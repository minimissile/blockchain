const Web3 = require('web3')
const RPC_URL = "https://ropsten.infura.io/v3/2c2a9b9cfe2541809d2c6ff9db7202a0"
const web3 = new Web3(RPC_URL)

// 查询最新区块号
// web3.eth.getBlockNumber().then(res => {
//     console.log(res)
// })

// 查询区块，如果要查询最新区块可传入 'latest', 可通过哈希值查询或者区块号查询
// web3.eth.getBlock('10473639').then(res => {
//     console.log(res)
// })

// web3.eth.getGasPrice().then(res => {
//     console.log('平均gas费用', res);
//     console.log('ethre：', web3.utils.fromWei(res, 'ether'))
// })

// console.log(Web3.modules);
// console.log(web3.eth.currentProvider);

// 检查是否已与最新区块同步
web3.eth.getStorageAt('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 0).then(res=>{
    console.log(res);
    // console.log(web3.utils.fromWei(res, 'ether'));
})
