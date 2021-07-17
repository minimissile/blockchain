import {ethers} from 'ethers'

/**
 * 需要留意合约是发布到哪一个网络上，保持和上一节 provider一致
 */

const abi = [
  "event ValueChanged(address indexed author, string oldValue, string newValue)",
  "constructor(string value)",
  "function getValue() view returns (string value)",
  "function setValue(string value)"
];

const contractAddress = '0x1d62525901140c52729225D58A266566AC88A7A6';

(async () => {
  const provider = ethers.getDefaultProvider('ropsten')
// 合约地址（来至上一节生成的合约地址）
  const contract = new ethers.Contract(contractAddress, abi, provider)
  // console.log(contract);

  // 调用视图方法
  let currentValue = await contract.getValue();
  // console.log(currentValue);
  // Hello World

  // 调用非视图方法
  let privateKey = '0xd2d5ecbbd44afa6d2bb6426ef29c9d9a86dbcde8df68830cf549c06bf018a77f';
  let wallet = new ethers.Wallet(privateKey, provider);
  // console.log(wallet.getBalance());

  // 使用签名器创建一个新的合约实例，它允许使用可更新状态的方法
  let contractWithSigner = contract.connect(wallet);

// 设置一个新值，返回交易
  let tx = await contractWithSigner.setValue("I like turtles.");

// 查看: https://ropsten.etherscan.io/tx/0xaf0068dcf728afa5accd02172867627da4e6f946dfb8174a7be31f01b11d5364
  console.log(tx.hash);
// "0xaf0068dcf728afa5accd02172867627da4e6f946dfb8174a7be31f01b11d5364"

// 操作还没完成，需要等待挖矿
  await tx.wait();

// 再次调用合约的 getValue()
  let newValue = await contract.getValue();

  console.log(newValue);
  // "I like turtles."

  // 监听事件Event
  contract.on("ValueChanged", (author, oldValue, newValue, event) => {
    // 在值变化的时候被调用

    console.log(author);

    console.log(oldValue);
    // "Hello World"

    console.log(newValue);
    // "Ilike turtles."

    // 查看后面的事件触发器  Event Emitter 了解事件对象的属性
    console.log(event.blockNumber);
    // 4115004
  });


})()
