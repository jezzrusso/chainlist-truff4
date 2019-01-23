var Greetings = artifacts.require("../contracts/Greetings.sol");
var Count = artifacts.require("../contracts/Count.sol");

module.exports = function(deployer) {
    deployer.deploy(Greetings);
    deployer.deploy(Count);
};