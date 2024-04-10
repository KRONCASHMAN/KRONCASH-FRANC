// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KCFToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Kronlet Cash Franc", "KCF") {
        _mint(msg.sender, initialSupply);
    }
}
