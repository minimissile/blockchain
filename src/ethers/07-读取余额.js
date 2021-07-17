import {ethers} from 'ethers'
import {ACCOUNT_1,RPC_URL} from '../config/index.mjs'

// 连接自定义节点
const provider = new ethers.providers.JsonRpcProvider(RPC_URL)

provider.getBalance(ACCOUNT_1).then(res=>{
  let etherString = ethers.utils.formatEther(res);
  console.log("Balance: " + etherString, res);
})
