const { expect } = require("chai");

describe("Time tests", function() {
  it("should modify a value after 5 days", async function() {
    const MyContract = await ethers.getContractFactory("MyContract");
    const mycontract = await MyContract.deploy();    
    await mycontract.deployed();

    ethers.provider.send("evm_increaseTime", [60*60*24*5+1]); //utiliza JSON-RPC 

    await mycontract.set(5);
  });
});
