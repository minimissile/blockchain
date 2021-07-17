import Web3 from "web3";

// const RPC_URL = "https://mainnet.infura.io/v3/2c2a9b9cfe2541809d2c6ff9db7202a0"
const RPC_URL = "https://ropsten.infura.io/v3/2c2a9b9cfe2541809d2c6ff9db7202a0"

const web3 = new Web3(RPC_URL)

// 以太坊钱包地址
const address = "0x083D5C03c8e17BbF70805C44d49886D7C0B93A02"

web3.eth.getBalance(address, (err, wei) => {
    // 余额单位从wei转换为ether
    const balance = web3.utils.fromWei(wei, 'ether')
    console.log("balance: ", web3.utils.fromWei(wei, 'ether'))
})

// web3.eth.getBalance("0x03118E2c88676d31ee397E1eEf7789fECfbC40b9").then(res=>{
//     console.log(web3.utils.fromWei(res, 'ether'))
// });
