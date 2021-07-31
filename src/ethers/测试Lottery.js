import {ethers,utils} from 'ethers'
import abi from '../abis/lottery.mjs'
import Web3 from "web3";

(async ()=>{
  const provider = ethers.getDefaultProvider('ropsten')
  const privateKey = "0xd2d5ecbbd44afa6d2bb6426ef29c9d9a86dbcde8df68830cf549c06bf018a77f"
  const wallet = new ethers.Wallet(privateKey, provider)
  const RPC_URL = "https://ropsten.infura.io/v3/2c2a9b9cfe2541809d2c6ff9db7202a0"

  const web3 = new Web3(RPC_URL)

  const balance  = await wallet.getBalance()
  // console.log(111, balance.toString());

  // const wallet = ethers.Wallet.fromMnemonic(mnemonic)

  // console.log(wallet);

  const address = '0x6b216E3689c85040b63806b7Ffc56AF5f8F98AA2'



  const contract = new ethers.Contract(address, abi, provider)
  // const contract = new web3.eth.Contract(abi, address)
  // console.log(111, contract);
  // let contractWithSigner = contract.connect(wallet);

  // console.log(contract);
  //
  // contract.getManager().then(res=>{
  //   console.log(res);
  // })
  //
  const entResuonce = await contract.getBalance()
  console.log(6666666666, entResuonce.toLocaleString());


})()
