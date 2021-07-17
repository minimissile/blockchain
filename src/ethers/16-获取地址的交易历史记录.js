import {ethers} from 'ethers'

let etherscanProvider = new ethers.providers.EtherscanProvider();

// console.log(etherscanProvider);

let address = '0xb2682160c482eB985EC9F3e364eEc0a904C44C23';
let startBlock = 3135808;
let endBlock = 5091477;

etherscanProvider.getHistory(address, startBlock, endBlock).then(function(history) {
  console.log(history);
  // [
  //   {
  //     hash: '0x327632ccb6d7bb47b455383e936b2f14e6dc50dbefdc214870b446603b468675',
  //     blockHash: '0x0415f0d2741de45fb748166c7dc2aad9b3ff66bcf7d0a127f42a71d3e286c36d',
  //     blockNumber: 3135808,
  //     transactionIndex: 1,
  //     from: '0xb2682160c482eB985EC9F3e364eEc0a904C44C23',
  //     gasPrice: ethers.utils.bigNumberify('0x4a817c800'),
  //     gasLimit: ethers.utils.bigNumberify('0x493e0'),
  //     to: '0xAe572713CfE65cd7033774170F029B7219Ee7f70',
  //     value: ethers.utils.bigNumberify('0xd2f13f7789f0000'),
  //     nonce: 25,
  //     data: '0x',
  //     creates: null,
  //     chainId: 0
  //   },
  //   {
  //     hash: '0x7c10f2e7125a1fa5e37b54f5fac5465e8d594f89ff97916806ca56a5744812d9',
  //     ...
  //   }
  // ]
});
