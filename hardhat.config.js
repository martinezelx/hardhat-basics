require("@nomicfoundation/hardhat-toolbox");

// hardhat custom tasks
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  
  paths: {
    artifacts: "./artifacts",
    sources: "./contracts",
    cache: "./cache",
    tests: "./tests"
  },

  defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545"
    },
    // polygon: {
    //   url: "https://matic-mumbai.chainstacklabs.com",
    //   accounts: ["privatekey"]
    // }
  }
};