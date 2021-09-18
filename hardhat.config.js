require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("myaccounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      accounts: {mnemonic: "test test test test test test test test test test test junk"}
    },
    rinkeby: {
      accounts: {mnemonic: "test test test test test test test test test test test junk"}
    },
    local1: {
      accounts: {mnemonic: "test test test test test test test test test test test junk"},
      url: "http://localhost:8545"
    },
    local2: {
      accounts: {mnemonic: "test test test test test test test test test test test junk"},
      url: "http://localhost:8545"
    }
  },
  solidity: "0.7.3",
};

