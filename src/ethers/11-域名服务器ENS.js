import {ethers} from 'ethers'

const provider = ethers.getDefaultProvider()

// 将域名服务器解析为地址
provider.resolveName('registrar.firefly.eth').then(res => {
  console.log('address', res)
  // address 0x6fC21092DA55B392b045eD78F4732bff3C580e2c
})

// 将地址解析为ENS
provider.lookupAddress('0x6fC21092DA55B392b045eD78F4732bff3C580e2c').then(res => {
  console.log('ens', res);
  // ens registrar.firefly.eth
})
