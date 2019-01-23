// solium-disable linebreak-style
pragma solidity ^0.4.18;

contract Count {
    int count;

    function Count() public {
        count = 0;
    }

    function incrementCount() public {
        count++;
    }

    function getCount() public view returns (int) {
        return count;
    }
}