/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.7.3',
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      loggingEnabled: true,
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/FMfYjml3U8k2Els4lcbKfjHGWEGdnBMO",
        blockNumber: 11095000,
      },
      mining: {
        auto: true,
      },
      chainId: 1337,
    },
  },
}
