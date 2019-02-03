// solium-disable linebreak-style

pragma solidity ^0.4.18;

contract Ownable {

    address owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "sender mus be equals owner");
        _;
    }

    constructor() public {
        owner = msg.sender;
    }

}