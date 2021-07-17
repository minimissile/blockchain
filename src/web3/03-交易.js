import {Transaction as Tx} from 'ethereumjs-tx'
import Web3 from "web3";

const RPC_URL = "https://ropsten.infura.io/v3/2c2a9b9cfe2541809d2c6ff9db7202a0"

const web3 = new Web3(RPC_URL)

// 创建一个eth账号
// const account = web3.eth.accounts.create()

// console.log(account)
/**
 * {
    address: '0x5ae4517C0316263Cb77CC27fE68BafdA00DF62d6',
    privateKey: '0xd2d5ecbbd44afa6d2bb6426ef29c9d9a86dbcde8df68830cf549c06bf018a77f',
    signTransaction: [Function: signTransaction],
    sign: [Function: sign],
    encrypt: [Function: encrypt]
}
 */

// {
//     address: '0x083D5C03c8e17BbF70805C44d49886D7C0B93A02',
//         privateKey: '0xe3d9b6a1987acf6a282e401fb1bb38c3e5d29ccf2f7791447dc72c0bfae1cc3a',
//     signTransaction: [Function: signTransaction],
//     sign: [Function: sign],
//     encrypt: [Function: encrypt]
// }

// 1. 创建两个账号


// SET PRIVATE_KEY_2='0xd2d5ecbbd44afa6d2bb6426ef29c9d9a86dbcde8df68830cf549c06bf018a77f'

const account1 = '0x5ae4517C0316263Cb77CC27fE68BafdA00DF62d6'
const account2 = '0x083D5C03c8e17BbF70805C44d49886D7C0B93A02'

// const privateKey1 = process.env.PRIVATE_KEY_1
// const privateKey2 = process.env.PRIVATE_KEY_2

// console.log(privateKey2);

const privateKey1 = Buffer.from('0xd2d5ecbbd44afa6d2bb6426ef29c9d9a86dbcde8df68830cf549c06bf018a77f')
const privateKey2 = Buffer.from('0xe3d9b6a1987acf6a282e401fb1bb38c3e5d29ccf2f7791447dc72c0bfae1cc3a')

// const txObject = {
//     nonce: web3.utils.toHex(txCount),
//     to: account2, // 目标账户
//     value: web3.utils.toHex(web3.utils.toWei('0.01', 'ether')), // 要发送的以太币金额。这个值必须以十六进制表示，单位必须是wei。我们可以使用Web3.js工具web3.utils.toWei()转换单位。
//     gasLimit: web3.utils.toHex(21000), // 交易能消耗Gas的上限
//     gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')) // Gas价格
// }


web3.eth.getTransactionCount(account1, (err, txCount) => {
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2, // 目标账户
        value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')), // 要发送的以太币金额。这个值必须以十六进制表示，单位必须是wei。我们可以使用Web3.js工具web3.utils.toWei()转换单位。
        gasLimit: web3.utils.toHex(21000), // 交易能消耗Gas的上限
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')) // Gas价格
    }

    console.log('txObject', txObject);

    const tx = new Tx(txObject)
    tx.sign('0xd2d5ecbbd44afa6d2bb6426ef29c9d9a86dbcde8df68830cf549c06bf018a77f')

    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')


    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('txHash:', txHash)
    })



})

