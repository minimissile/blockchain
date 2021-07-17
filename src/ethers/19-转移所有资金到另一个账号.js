import {ethers} from 'ethers'

const account1 = '0x5ae4517C0316263Cb77CC27fE68BafdA00DF62d6';  // 0.65
const account2 = '0x083D5C03c8e17BbF70805C44d49886D7C0B93A02';  // 0.21

const privateKey1 = '0xd2d5ecbbd44afa6d2bb6426ef29c9d9a86dbcde8df68830cf549c06bf018a77f'
const privateKey2 = '0xe3d9b6a1987acf6a282e401fb1bb38c3e5d29ccf2f7791447dc72c0bfae1cc3a'

// 获取账号余额
const getBalance = (account, provider) => {
  return provider.getBalance(account)
}

(async () => {
  // 转移所有资金到另一个账号
  async function sweep(privateKey, newAddress) {
    let provider = ethers.getDefaultProvider('ropsten')
    let wallet = new ethers.Wallet(privateKey, provider);

    let code = await provider.getCode(newAddress);
    if (code !== '0x') {
      throw new Error('Cannot sweep to a contract');
    }

    // Get the current balance
    let balance = await wallet.getBalance();
    let gasPrice = await provider.getGasPrice();
    console.log('当前账户余额', ethers.utils.formatEther(balance))

    // The exact cost (in gas) to send to an Externally Owned Account (EOA)
    let gasLimit = 21000;

    // The balance less exactly the txfee in wei
    let value = balance.sub(gasPrice.mul(gasLimit))

    let tx = await wallet.sendTransaction({
      gasLimit: gasLimit,
      gasPrice: gasPrice,
      to: newAddress,
      value: value
    });

    console.log('在交易中发送:' + tx.hash);
    console.log('正在进行交易挖矿...');
    await tx.wait();
    console.log('账号转移完成');
    let newBalance = await wallet.getBalance();
    console.log('当前账户余额', ethers.utils.formatEther(newBalance))

    const toBalance = await provider.getBalance(newAddress)
    console.log('目标账户余额', ethers.utils.formatEther(toBalance))

  }

  sweep(privateKey2, account1)


})()
