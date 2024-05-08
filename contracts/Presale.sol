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
    mapping(address => bool) public eligibleForAirdrop;
    mapping(address => bool) public hasClaimedAirdrop;
    mapping(address => uint256) public airdropAmount;
    mapping(address => bool) public hasPurchasedTokens;

    uint256 public goalToRaise = 10000 * 1e18; // 10K in wei
    uint256 public airdropAmountPerWallet = 500 * 1e18; // 500 Kronlets
    uint256 public airdropHoldTime = 90 days; // Hold for 3 months
    uint256 public first1000WalletsKronletsValueUSD = 1 * 1e18; // Kronlets worth 1 USD
    uint256 public first10000WalletsKCFValueUSD = 0.10 * 1e18; // KCF worth 0.10 USD
    uint256 public kfTokenSupply = 10_000_000 * 1e18; // 10 million KF
    uint256 public kcfTokenSupply = 100_000_000 * 1e18; // 100 million KCF
    uint256 public kfBurnAfter5000 = 1_000_000 * 1e18; // 1 million KF to burn after 5000 wallets
    uint256 public boostPumpRate = 300; // 300% boost pump
    uint256 public burnRate = 10; // 10% burn rate
    uint256 public txFee = 5; // 5% transaction fee
    uint256 public lpFee = 5; // 5% LP fee

    event AirdropClaimed(address indexed recipient, uint256 amount);
    event TokensPurchased(address indexed buyer, uint256 amount);

    constructor(ERC20 _kcfToken, ERC20 _kfToken) {
        owner = msg.sender;
        kcfToken = _kcfToken;
        kfToken = _kfToken;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Only contract owner can perform this action");
        _;
    }

    function startPresale() external onlyOwner {
        _unpause();
    }

    function pausePresale() external onlyOwner {
        _pause();
    }

    function purchaseTokens(uint256 amount) external nonReentrant whenNotPaused {
        require(!hasPurchasedTokens[msg.sender], "Tokens already purchased");
        // Logic for token purchase
        hasPurchasedTokens[msg.sender] = true;
        emit TokensPurchased(msg.sender, amount);
    }

    function claimAirdrop() external {
        require(eligibleForAirdrop[msg.sender] && !hasClaimedAirdrop[msg.sender], "Not eligible for airdrop or already claimed");
        
        airdropAmount[msg.sender] = airdropAmountPerWallet;
        hasClaimedAirdrop[msg.sender] = true;

        kcfToken.transfer(msg.sender, airdropAmountPerWallet);

        emit AirdropClaimed(msg.sender, airdropAmountPerWallet);
    }

    // Additional functions and logic for presale management can be added as needed
}