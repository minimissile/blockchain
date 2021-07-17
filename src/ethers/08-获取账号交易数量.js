import {ethers} from 'ethers'
import {ROPSTEN_RPC_URL, ACCOUNT_1} from '../config/index.mjs'

const provider = new ethers.providers.JsonRpcProvider(ROPSTEN_RPC_URL)

provider.getTransactionCount(ACCOUNT_1).then(res => {
  console.log(res);
})
