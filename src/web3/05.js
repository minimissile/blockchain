var Tx     = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/2c2a9b9cfe2541809d2c6ff9db7202a0')

const account1 = '0xf4Ab5314ee8d7AA0eB00b366c52cEEccC62d6B4B' // Your account address 1
const account2 = '0xff96B8B43ECd6C49805747F94747bFfa3A960b69' // Your account address 2

const pk1 = 'b75e2bcaec74857cf9bb6636d66a04784d4c0fcfd908f4a2bc213428eba5af0d' // 实际项目中应该从process.env.PRIVATE_KEY_1中读取
const pk2 = 'ac0adfdbaeb0770a479e79aac78779d82fdc2f9262e0c8f751ae70fb63ef6196' // 实际项目中应该从process.env.PRIVATE_KEY_2中读取

const privateKey1 = Buffer.from(pk1, 'hex')
const privateKey2 = Buffer.from(pk2, 'hex')

// 读取已部署的契约 -- 从Etherscan获取地址
const contractAddress = '0x30951343d6d80d2c94897f1a81c53cc030aef879'
const contractABI = [
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_value",
                "type": "string"
            }
        ],
        "name": "set",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "get",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
]

const contract = new web3.eth.Contract(contractABI, contractAddress)

// 读取val值
contract.methods.get().call((err, val) => {
    console.log({ err, val })
})
