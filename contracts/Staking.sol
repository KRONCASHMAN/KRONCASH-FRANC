// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Staking is Ownable(msg.sender) {
    using SafeERC20 for IERC20;

    IERC20 private ddawgsToken;
    uint256 private rewardRate; // Reward rate per staking period

    struct Stake {
        uint256 amount;
        uint256 startTime;
        uint256 stakingPeriod;
        bool active;
    }

    mapping (address => Stake) public stakes;

    uint256 private constant threeMonthsRewardPercentage = 10; // 10% reward for 3 months staking
    uint256 private constant sixMonthsRewardPercentage = 20; // 20% reward for 6 months staking
    uint256 private constant oneYearRewardPercentage = 30; // 30% reward for a year staking

    event Staked(address indexed user, uint256 amount, uint256 stakingPeriod);
    event Unstaked(address indexed user, uint256 amount, uint256 stakingPeriod);
    event RewardClaimed(address indexed user, uint256 amount, uint256 stakingPeriod);

    constructor(address ddawgsTokenAddress) {
        ddawgsToken = IERC20(ddawgsTokenAddress);
    }

    function stake(uint256 amount, uint256 stakingPeriod) external {
        require(amount > 0, "Amount must be greater than zero");
        require(!stakes[msg.sender].active, "Already staked");

        uint256 stakingDuration;
        uint256 rewardPercentage;
        if (stakingPeriod == 3) {
            stakingDuration = 3 * 30 days;
            rewardPercentage = threeMonthsRewardPercentage;
        } else if (stakingPeriod == 6) {
            stakingDuration = 6 * 30 days;
            rewardPercentage = sixMonthsRewardPercentage;
        } else if (stakingPeriod == 12) {
            stakingDuration = 365 days;
            rewardPercentage = oneYearRewardPercentage;
        } else {
            revert("Invalid staking Period");
        }
    
        stakes[msg.sender] = Stake(amount, block.timestamp, stakingDuration, true);
        ddawgsToken.safeTransferFrom(msg.sender, address(this), amount);

        emit Staked(msg.sender, amount, stakingPeriod);
    }

    function unstake() external {
        Stake storage stakeData = stakes[msg.sender];
        require(stakeData.active, "No active stake");

        uint256 stakedAmount = stakeData.amount;
        require(stakedAmount > 0, "No staked amount");

        uint256 reward = calculateReward(msg.sender);
        uint256 totalAmount = stakedAmount + reward;

        stakeData.active = false;
        stakeData.amount = 0;

        ddawgsToken.safeTransfer(msg.sender, totalAmount);

        emit Unstaked(msg.sender, totalAmount, stakeData.stakingPeriod);
    }

    function ClaimReward() external {
        Stake storage stakeData = stakes[msg.sender];
        require(stakeData.active, "No active stake");

        uint256 reward = calculateReward(msg.sender);
        require(reward > 0, "No reward to claim");

        stakeData.startTime = block.timestamp;

        ddawgsToken.safeTransfer(msg.sender, reward);

        emit RewardClaimed(msg.sender, reward, stakeData.stakingPeriod);
    }

    function calculateReward(address user) public view returns (uint256) {
        Stake storage stakeData = stakes[user];
        require(stakeData.active, "No active stake");

        uint256 elapsedTime = block.timestamp - stakeData.startTime;
        uint256 numPeriods = elapsedTime / stakeData.stakingPeriod;

        uint256 rewardPercentage;
        if (stakeData.stakingPeriod == 3 * 30 days) {
            rewardPercentage = threeMonthsRewardPercentage;
        } else if (stakeData.stakingPeriod == 6 * 30 days) {
            rewardPercentage = sixMonthsRewardPercentage;
        } else if (stakeData.stakingPeriod == 365 days) {
            rewardPercentage = oneYearRewardPercentage;
        } else {
            revert("Invalid staking period");
        }

        return (stakeData.amount * rewardPercentage * numPeriods) / 100;
    }

    function emergencyWithdraw (address tokenAddress, uint256 amount) external onlyOwner {
        IERC20(tokenAddress).safeTransfer(owner(), amount);
    }
}