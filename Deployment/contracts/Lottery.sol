// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract lottery {
    address public manager;
    address payable public winner;
    address payable[] public players;

    constructor() {
        manager = msg.sender;
    }

    modifier OnlyOwner() {
        require(manager == msg.sender, "Only manager can call this function");
        _;
    }

    function enterLottery() public payable {
        require(
            msg.value >= 0.01 ether,
            "Need atleast 0.01 ether to participates"
        );
        players.push(payable(msg.sender));
    }

    function random() public view OnlyOwner returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        block.prevrandao,
                        block.timestamp,
                        players.length
                    )
                )
            );
    }

    function lotteryBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function participants() public view returns (address payable[] memory) {
        return players;
    }

    function lotteryWinner() public OnlyOwner {
        require(players.length >= 3, "Minimum 3 players are required to enter");
        uint256 r = random();
        uint index = r % players.length;
        winner = players[index];
        winner.transfer(lotteryBalance());
        players = new address payable[](0);
    }
}
