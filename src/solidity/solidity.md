# 基本案例

```apl
// SPDX-License-Identifier: GPL-3.0 开源协议，必写，可以定义具体协议，也可以定义无协议
pragma solidity >=0.4.16 <0.9.0;  // solidity版本，可以指定具体版本，或者某个范围内的版本  如 ^0.4.16

// contract声明一个只能合约，和js中的class很像，合约命名采用驼峰命名法，首字母要大写
contract SimpleStorage {
	// uint: 正整数，非负数的正整数(int 表示整数)
	// public: 添加了public关键字，表示这个变量可以被公开读取
    uint public storedData;

    function set(uint x) public {
        storedData = x;
    }
	// view 表示只读
	// returns 可能会返回多个参数，只能合约是允许返回多个的
    function get() public view returns (uint) {
        return storedData;
    }
}

```

函数修改器

```js
contract SimpleStorage {
    uint public storedData;
    uint256 max;
    address public owner = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    
    
    modifier onlyOwner() {
        // require:  处理验证工作 相当于js 的if else
        // msg.sender 当前合约调用者
        require(owner == msg.sender, 'only owner can call this function');
        // 表示需要用到函数修改器的函数内代码
        _;
    }
    
    // 使用函数修改器，当前函数的内容会在 函数修改器中的 _ 处执行
    function set(uint x) public onlyOwner{
        storedData = x;
    }
}
```

