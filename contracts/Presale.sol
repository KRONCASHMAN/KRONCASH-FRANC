// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

abstract contract ReentrancyGuard {
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    modifier nonReentrant() {
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");
        _status = _ENTERED;
        _;
        _status = _NOT_ENTERED;
    }
}

abstract contract Pausable is Context {
    bool private _paused;

    /**
     * @dev Emitted when the pause is triggered by `account`.
     */
    event Paused(address account);

    /**
     * @dev Emitted when the pause is lifted by `account`.
     */
    event Unpaused(address account);

    /**
     * @dev The operation failed because the contract is paused.
     */
    error EnforcedPause();

    /**
     * @dev The operation failed because the contract is not paused.
     */
    error ExpectedPause();

    /**
     * @dev Initializes the contract in unpaused state.
     */
    constructor() {
        _paused = false;
    }

    /**
     * @dev Modifier to make a function callable only when the contract is not paused.
     *
     * Requirements:
     *
     * - The contract must not be paused.
     */
    modifier whenNotPaused() {
        _requireNotPaused();
        _;
    }

    /**
     * @dev Modifier to make a function callable only when the contract is paused.
     *
     * Requirements:
     *
     * - The contract must be paused.
     */
    modifier whenPaused() {
        _requirePaused();
        _;
    }

    /**
     * @dev Returns true if the contract is paused, and false otherwise.
     */
    function paused() public view virtual returns (bool) {
        return _paused;
    }

    /**
     * @dev Throws if the contract is paused.
     */
    function _requireNotPaused() internal view virtual {
        if (paused()) {
            revert EnforcedPause();
        }
    }

    /**
     * @dev Throws if the contract is not paused.
     */
    function _requirePaused() internal view virtual {
        if (!paused()) {
            revert ExpectedPause();
        }
    }

    /**
     * @dev Triggers stopped state.
     *
     * Requirements:
     *
     * - The contract must not be paused.
     */
    function _pause() internal virtual whenNotPaused {
        _paused = true;
        emit Paused(_msgSender());
    }

    /**
     * @dev Returns to normal state.
     *
     * Requirements:
     *
     * - The contract must be paused.
     */
    function _unpause() internal virtual whenPaused {
        _paused = false;
        emit Unpaused(_msgSender());
    }
}

contract Presale is ReentrancyGuard, Pausable {
    address public owner;
    ERC20 public kcfToken;
    ERC20 public kfToken;

    bool public KF_Presale_end = false;
    mapping(address => bool) public hasPurchased_KF_Tokens;
    mapping(address => uint256) public KF_PurchasedData;
    uint256 public totalSold_KF_amount;

    bool public KCF_Presale_end = false;
    mapping(address => bool) public hasPurchased_KCF_Tokens;
    mapping(address => uint256) public KCF_PurchasedData;
    uint256 public totalSold_KCF_amount;

    mapping(address => bool) public eligibleForAirdrop;
    mapping(address => bool) public hasClaimedAirdrop;
    mapping(address => uint256) public airdropAmount;

    // Token price on presale round
    uint256 public KCF_Price = 1 * 1e17; // 0.1$ KF token purchasing price
    uint256 public KF_Price = 1 * 1e18; // 1$ KF token purchasing price
    uint256 public KF_TokenSupply = 10000000 * 1e18; // 10 million KF
    uint256 public KCF_TokenSupply = 100000000 * 1e18; // 100 million KCF

    uint256 public goalToRaise = 10000 * 1e18; // 10K in wei
    uint256 public airdropAmountPerWallet = 500 * 1e18; // 500 Kronlets
    uint256 public airdropHoldTime = 90 days; // Hold for 3 months
    uint256 public first1000WalletsKronletsValueUSD = 1 * 1e18; // Kronlets worth 1 USD
    uint256 public first10000WalletsKCFValueUSD = 0.10 * 1e18; // KCF worth 0.10 USD
    uint256 public kfBurnAfter5000 = 1000000 * 1e18; // 1 million KF to burn after 5000 wallets
    uint256 public boostPumpRate = 300; // 300% boost pump
    uint256 public burnRate = 10; // 10% burn rate
    uint256 public txFee = 5; // 5% transaction fee
    uint256 public lpFee = 5; // 5% LP fee

    event AirdropClaimed(address indexed recipient, uint256 amount);
    event KF_TokensPurchased(address indexed buyer, uint256 amount);
    event KCF_TokensPurchased(address indexed buyer, uint256 amount);

    constructor(ERC20 _kcfToken, ERC20 _kfToken) {
        owner = msg.sender;
        kcfToken = _kcfToken;
        kfToken = _kfToken;
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only contract owner can perform this action"
        );
        _;
    }

    function startPresale() external onlyOwner {
        _unpause();
    }

    function pausePresale() external onlyOwner {
        _pause();
    }

    function purchase_KF_Tokens(uint256 amount)
        external
        payable
        nonReentrant
        whenNotPaused
    {
        require(
            !hasPurchased_KF_Tokens[msg.sender],
            "Tokens already purchased"
        );
        require(
            totalSold_KF_amount + amount <= KF_TokenSupply,
            "Insufficient KF token balances"
        );

        // Calculate the total cost in ETH based on the amount of tokens being purchased
        uint256 totalCost = amount * KF_Price;

        // Ensure that the user has sent enough ETH to purchase the tokens
        require(msg.value >= totalCost, "Insufficient Ether sent");

        // Transfer the KF tokens to the buyer
        kfToken.transfer(msg.sender, amount);

        // Mark the user as having purchased tokens
        hasPurchased_KF_Tokens[msg.sender] = true;

        // Mark the user with the purchased amount
        KF_PurchasedData[msg.sender] = amount;

        emit KF_TokensPurchased(msg.sender, amount);
    }

    function purchase_KCF_Tokens(uint256 amount)
        external
        payable
        nonReentrant
        whenNotPaused
    {
        require(KF_Presale_end, "KF Token Presale is not ended !");
        require(
            totalSold_KCF_amount + amount <= KCF_TokenSupply,
            "Insufficient KCF token balances"
        );

        uint256 totalCost = amount * KCF_Price;
        require(msg.value >= totalCost, "Insufficient Ether sent");

        kcfToken.transfer(msg.sender, amount);
        hasPurchased_KCF_Tokens[msg.sender] = true;

        KCF_PurchasedData[msg.sender] = amount;

        emit KCF_TokensPurchased(msg.sender, amount);
    }

    function endPresale() external onlyOwner {
        require(KF_Presale_end, "KF Token Presale has not ended yet");
        require(KCF_Presale_end, "KCF Token Presale has not ended yet");

        // Perform any necessary actions when ending the presale
        // For example, transfer any remaining unsold tokens back to the owner or burn them

        // Transfer ownership of the tokens to the owner
        kcfToken.transfer(owner, kcfToken.balanceOf(address(this)));
        kfToken.transfer(owner, kfToken.balanceOf(address(this)));
    }

    function setEligibleForAirdrop(address[] calldata recipients)
        external
        onlyOwner
    {
        for (uint256 i = 0; i < recipients.length; i++) {
            eligibleForAirdrop[recipients[i]] = true;
        }
    }

    function setKFPresaleEnd(bool status) external onlyOwner {
        KF_Presale_end = status;
    }

    function setKCFPresaleEnd(bool status) external onlyOwner {
        KCF_Presale_end = status;
    }

    function setAirdropAmountPerWallet(uint256 amount) external onlyOwner {
        airdropAmountPerWallet = amount;
    }

    function setAirdropHoldTime(uint256 time) external onlyOwner {
        airdropHoldTime = time;
    }

    function setFirst1000WalletsKronletsValueUSD(uint256 value)
        external
        onlyOwner
    {
        first1000WalletsKronletsValueUSD = value;
    }

    function setFirst10000WalletsKCFValueUSD(uint256 value) external onlyOwner {
        first10000WalletsKCFValueUSD = value;
    }

    function setKFBurnAfter5000(uint256 amount) external onlyOwner {
        kfBurnAfter5000 = amount;
    }

    function setBoostPumpRate(uint256 rate) external onlyOwner {
        boostPumpRate = rate;
    }

    function setBurnRate(uint256 rate) external onlyOwner {
        burnRate = rate;
    }

    function setTxFee(uint256 fee) external onlyOwner {
        txFee = fee;
    }

    function setLPFee(uint256 fee) external onlyOwner {
        lpFee = fee;
    }

    function claimAirdrop() external {
        require(
            eligibleForAirdrop[msg.sender] && !hasClaimedAirdrop[msg.sender],
            "Not eligible for airdrop or already claimed"
        );

        airdropAmount[msg.sender] = airdropAmountPerWallet;
        hasClaimedAirdrop[msg.sender] = true;

        kcfToken.transfer(msg.sender, airdropAmountPerWallet);

        emit AirdropClaimed(msg.sender, airdropAmountPerWallet);
    }

    // Additional functions and logic for presale management can be added as needed
}
