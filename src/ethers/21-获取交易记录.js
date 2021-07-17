import {ethers, utils} from 'ethers'

const etherscanProvider = new ethers.providers.EtherscanProvider();
console.log(etherscanProvider);

const address = '0x5ae4517C0316263Cb77CC27fE68BafdA00DF62d6'

etherscanProvider.getHistory(address).then((history) => {
  console.log('执行遍历');
  history.forEach((tx) => {
    console.log(tx);
  })
});
