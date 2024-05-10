// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

library SafeMath {
    /**
     * @dev Multiplies two numbers, throws on overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256 c) {
        if (a == 0) {
            return 0;
        }
        c = a * b;
        assert(c / a == b);
        return c;
    }

    /**
     * @dev Integer division of two numbers, truncating the quotient.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        // assert(b > 0); // Solidity automatically throws when dividing by 0
        // uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold
        return a / b;
    }

    /**
     * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }

    /**
     * @dev Adds two numbers, throws on overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256 c) {
        c = a + b;
        assert(c >= a);
        return c;
    }
}

contract KronletFrancToken is ERC20 {
    using SafeMath for uint256;

    address public owner; // owner address
    uint256 public inflationRate; // Inflation rate as a percentage (e.g., 2% inflation = 2)
    uint256 public reserveRatio = 20; // Reserve requirement in percentage
    uint256 public reserveBalance; // current reserve balance
    bool public reserveRequirementMet; // Flag to track if reserve requirement is met

    address public CommunityAddress =
        0x5c86E17c7bF73Fb736371BdF3f1aC0b93A5b770d;
    address public ReserveAddress = 0x5c86E17c7bF73Fb736371BdF3f1aC0b93A5b770d;
    address public TeamWalletAddress =
        0x5c86E17c7bF73Fb736371BdF3f1aC0b93A5b770d;
    address public VestingContractAddress =
        0x5c86E17c7bF73Fb736371BdF3f1aC0b93A5b770d;

    constructor() ERC20("Kronlet Franc", "KF") {
        inflationRate = 7; // Example inflation rate of 7% per year
        owner = msg.sender; // Set Owner address
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function adjustSupply() public onlyOwner {
        if (reserveRequirementMet) {
            // Calculate the new total supply based on the inflation rate
            uint256 currentSupply = totalSupply();
            uint256 newSupply = (currentSupply * (100 + inflationRate)) / 100;

            // Mint new tokens to adjust the supply
            _mint(owner, newSupply - currentSupply);
        } else {
            // square root the inflation rate if reserve requirement is not met
            uint256 inflationEffect = inflationRate.mul(inflationRate).div(
                10000
            ); // Square root effect
            uint256 newInflationRate = inflationEffect < 1
                ? inflationEffect
                : 1; // Limit the inflation effect
            inflationRate = newInflationRate;

            reserveRequirementMet = true; // Set reserve requirement met
        }
    }

    function updateReserveBalance(uint256 _newBalance) public onlyOwner {
        reserveBalance = _newBalance;
        reserveRequirementMet =
            reserveBalance >= totalSupply().mul(reserveRatio).div(100);
    }

    // Token distributed function
    function TokenDistribute(uint256 _supply) public onlyOwner {
        uint256 liquidityAllocation = (_supply * 30) / 100;
        uint256 communityAllocation = (_supply * 20) / 100;
        uint256 reserveAllocation = (_supply * 20) / 100;
        uint256 teamAllocation = (_supply * 20) / 100;
        uint256 vestingAllocation = (_supply * 10) / 100;

        // Mint tokens to the respective allocations
        _mint(address(this), liquidityAllocation); // Liquidity Pools
        _mint(address(CommunityAddress), communityAllocation); // Community
        _mint(address(ReserveAddress), reserveAllocation); // Reserve
        _mint(address(TeamWalletAddress), teamAllocation); // Developer/Team Wallet
        _mint(address(VestingContractAddress), vestingAllocation); // Vesting Schedule
    }

    // General mint function owner
    function mint(address _receiver, uint256 _supply) public onlyOwner {
        // Mint the remaining tokens to the receiver
        _mint(_receiver, _supply);
    }

    // General burn function by owner
    function burn(address _from, uint256 _supply) public onlyOwner {
        // burn _supply amount from _from address
        _burn(_from, _supply);
    }
}
