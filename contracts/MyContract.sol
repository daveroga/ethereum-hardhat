//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;
import "hardhat/console.sol";

contract MyContract {
  uint256 public myValue;
  uint256 public creation;
  
  constructor(uint256 a) {
    creation = block.timestamp;
    myValue = a;
  }

  function set(uint256 _value) public {
    require(block.timestamp >= creation + 5 days, "Need to pass 5 days");  
    myValue = _value;
  }

}