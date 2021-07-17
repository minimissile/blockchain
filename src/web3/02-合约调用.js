const Web3 = require('web3')
const abi = require('./abi/omiseGo.json')

const RPC_URL = "https://mainnet.infura.io/v3/2c2a9b9cfe2541809d2c6ff9db7202a0"

const web3 = new Web3(RPC_URL)

// 以太坊钱包地址
const address = "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"

// 这里需要注意使用new关键字
const contract = new web3.eth.Contract(abi, address)

// 查看OmiseGo通证的名称
contract.methods.totalSupply().call((err, result) => {
    console.log(result)
})
// 140245398245132780789239631

// 查看OmiseGo通证的标志
contract.methods.name().call((err, result) => { console.log(result) })
// > OMGToken

contract.methods.symbol().call((err, result) => { console.log(result) })
// > OMG

contract.methods.balanceOf('0xd26114cd6EE289AccF82350c8d8487fedB8A0C07').call((err, result) => { console.log(result) })
// > 22620364140612904305860

