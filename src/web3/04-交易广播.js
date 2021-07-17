import {Transaction as Tx} from 'ethereumjs-tx'
import Web3 from "web3";

const web3 = new Web3('https://ropsten.infura.io/v3/2c2a9b9cfe2541809d2c6ff9db7202a0')

const account2 = '0x5ae4517C0316263Cb77CC27fE68BafdA00DF62d6' // Your account address 1
const account1 = '0x083D5C03c8e17BbF70805C44d49886D7C0B93A02' // Your account address 2

// 注意：这里是去掉了0x开头
const pk1 = 'd2d5ecbbd44afa6d2bb6426ef29c9d9a86dbcde8df68830cf549c06bf018a77f'
const pk2 = 'ac0adfdbaeb0770a479e79aac78779d82fdc2f9262e0c8f751ae70fb63ef6196'

const privateKey2 = Buffer.from(pk1, 'hex')
const privateKey1 = Buffer.from(pk2, 'hex')

web3.eth.getTransactionCount(account1, (err, txCount) => {
    // 创建交易对象
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    // 签署交易
    const tx = new Tx(txObject, {chain: 'ropsten', hardfork: 'petersburg'})
    tx.sign(privateKey1)

    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')

    // 广播交易
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('txHash:', txHash)
        // 可以去ropsten.etherscan.io查看交易详情
    })
})
