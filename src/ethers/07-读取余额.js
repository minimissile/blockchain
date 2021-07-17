import {ethers} from 'ethers'
import {ACCOUNT_1, ROPSTEN_RPC_URL} from '../config/index.mjs'

// 连接自定义节点

// 定国自定义rpc节点连接
// const provider = new ethers.providers.JsonRpcProvider(RPC_URL)

// 通过默认的测试网络连接
const provider = ethers.getDefaultProvider('ropsten')

provider.getBalance(ACCOUNT_1).then(res => {
  let etherString = ethers.utils.formatEther(res);
  console.log("Balance: " + etherString, res);

  // Balance: 0.11 BigNumber { _hex: '0x0186cc6acd4b0000', _isBigNumber: true }
})
