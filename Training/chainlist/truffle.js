var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "sword nephew tooth lend age suffer hand clever clap leopard atom immense";

module.exports = {
     // See <http://truffleframework.com/docs/advanced/configuration>
     // to customize your Truffle configuration!
     networks: {
          ganache: {
               host: "localhost",
               port: 7545,
               network_id: "*" // Match any network id
          },
          chainskills: {
               host: "localhost",
               port: 8545,
               network_id: "4224",
               gas: 4700000
          },
          rinkeby: {
               host: "localhost", // Connect to geth on the specified
               port: 8545,
               from: "0x8644907f3990fe0707cb497b85a354a47bca8084", // default address to use for any transaction Truffle makes during migrations
               network_id: 4,
               gas: 4612388 // Gas limit used for deploys
          },
          rinkebyreal: {
               provider: function () {
                    return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/4f709cbe1ba74996b7eb4b27efa0d8e6");
               },
               network_id: 1,
               from: '0x8644907f3990fe0707cb497b85a354a47bca8084'
          },



     }
};