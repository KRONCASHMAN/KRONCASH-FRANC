/**
 *Submitted for verification at Etherscan.io on 2024-05-18
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IERC20 {
    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    /**
     * @dev Returns the value of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the value of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves a `value` amount of tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 value) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    /**
     * @dev Sets a `value` amount of tokens as the allowance of `spender` over the
     * caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 value) external returns (bool);

    /**
     * @dev Moves a `value` amount of tokens from `from` to `to` using the
     * allowance mechanism. `value` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);
}

abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }

    function _contextSuffixLength() internal view virtual returns (uint256) {
        return 0;
    }
}

abstract contract Ownable is Context {
    address private _owner;

    /**
     * @dev The caller account is not authorized to perform an operation.
     */
    error OwnableUnauthorizedAccount(address account);

    /**
     * @dev The owner is not a valid owner account. (eg. `address(0)`)
     */
    error OwnableInvalidOwner(address owner);

    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    /**
     * @dev Initializes the contract setting the address provided by the deployer as the initial owner.
     */
    constructor(address initialOwner) {
        if (initialOwner == address(0)) {
            revert OwnableInvalidOwner(address(0));
        }
        _transferOwnership(initialOwner);
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if the sender is not the owner.
     */
    function _checkOwner() internal view virtual {
        if (owner() != _msgSender()) {
            revert OwnableUnauthorizedAccount(_msgSender());
        }
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby disabling any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        _transferOwnership(address(0));
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        if (newOwner == address(0)) {
            revert OwnableInvalidOwner(address(0));
        }
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Internal function without access restriction.
     */
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

abstract contract ReentrancyGuard {
    // Booleans are more expensive than uint256 or any type that takes up a full
    // word because each write operation emits an extra SLOAD to first read the
    // slot's contents, replace the bits taken up by the boolean, and then write
    // back. This is the compiler's defense against contract upgrades and
    // pointer aliasing, and it cannot be disabled.

    // The values being non-zero value makes deployment a bit more expensive,
    // but in exchange the refund on every call to nonReentrant will be lower in
    // amount. Since refunds are capped to a percentage of the total
    // transaction's gas, it is best to keep them low in cases like this one, to
    // increase the likelihood of the full refund coming into effect.
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Prevents a contract from calling itself, directly or indirectly.
     * Calling a `nonReentrant` function from another `nonReentrant`
     * function is not supported. It is possible to prevent this from happening
     * by making the `nonReentrant` function external, and making it call a
     * `private` function that does the actual work.
     */
    modifier nonReentrant() {
        // On the first call to nonReentrant, _notEntered will be true
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        // Any calls to nonReentrant after this point will fail
        _status = _ENTERED;

        _;

        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
        _status = _NOT_ENTERED;
    }
}

contract Presale is ReentrancyGuard {
    address public owner;
    IERC20 public kcfToken;
    IERC20 public kfToken;
    IERC20 public USDT;

    bool public KF_Presale_end = false;
    mapping(address => bool) public hasPurchased_KF_Tokens;
    mapping(address => uint256) public KF_PurchasedData;
    uint256 public totalSold_KF_amount;
    address payable fundsWallet;
    bool public KCF_Presale_end = false;
    mapping(address => bool) public hasPurchased_KCF_Tokens;
    mapping(address => uint256) public KCF_PurchasedData;
    uint256 public totalSold_KCF_amount;

    mapping(address => bool) public eligibleForAirdrop;
    mapping(address => bool) public hasClaimedAirdrop;
    mapping(address => uint256) public airdropAmount;

    // Token price on presale round
    uint256 public KCF_Price = 100000 ; // 0.1$ KF token purchasing price
    uint256 public KF_Price = 1000000 ; // 1$ KF token purchasing price
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

    // Puase and Start the Presale system
    bool public _paused = true;

    event AirdropClaimed(address indexed recipient, uint256 amount);
    event KF_TokensPurchased(address indexed buyer, uint256 amount);
    event KCF_TokensPurchased(address indexed buyer, uint256 amount);

    constructor(address _kcfToken, address _kfToken, address _usdt) {
        owner = msg.sender;
        kcfToken = IERC20(_kcfToken);
        kfToken = IERC20(_kfToken);
        USDT = IERC20(_usdt);
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only contract owner can perform this action"
        );
        _;
    }

    // toggle pause and start the system
    function ToggleemergencyPause() external onlyOwner {
        _paused = !_paused;
    }

    function startPresale() external onlyOwner {
        _paused = false;
    }

    ///////////////////////////
    // Modifiers
    ///////////////////////////
    // check system paused or not
    modifier whenNotPaused() {
        require(!_paused, "Contract is paused");
        _;
    }

    function setVestingPeriod(address _new) external onlyOwner {
        fundsWallet = payable(_new);
    }
    
    receive() external payable {}

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

        // Transfer the KF tokens to the buyer
        kfToken.transfer(msg.sender, amount);
        fundsWallet.transfer(msg.value);
        // Mark the user as having purchased tokens
        hasPurchased_KF_Tokens[msg.sender] = true;

        // Mark the user with the purchased amount
        KF_PurchasedData[msg.sender] = amount;

        emit KF_TokensPurchased(msg.sender, amount);
    }

    
    function purchase_KF_Tokens_By_USDT(uint256 amount)
        external
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

        uint256 USDT_costs = amount * KCF_Price;
        uint256 allowance = USDT.allowance(msg.sender, address(this));
        require(
            allowance >= USDT_costs,
            "Allowance should be greater or equals to amount"
        );

        // Transfer USDT to this address
        USDT.transferFrom(msg.sender, address(this), USDT_costs);
        USDT.transfer(fundsWallet, USDT_costs);

        // Transfer the KF tokens to the buyer
        uint256 kfAmount = amount * 10 ** 18;
        kfToken.transfer(msg.sender, kfAmount);
        // Mark the user as having purchased tokens
        hasPurchased_KF_Tokens[msg.sender] = true;

        // Mark the user with the purchased amount
        KF_PurchasedData[msg.sender] = kfAmount;

        emit KF_TokensPurchased(msg.sender, kfAmount);
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

        fundsWallet.transfer(msg.value);

        kcfToken.transfer(msg.sender, amount);
        hasPurchased_KCF_Tokens[msg.sender] = true;

        KCF_PurchasedData[msg.sender] = amount;

        emit KCF_TokensPurchased(msg.sender, amount);
    }

    ///////////////////////////
    // Functions for users
    ///////////////////////////
    function purchase_KCF_Tokens_By_USDT(uint256 amount)
        external
        nonReentrant
        whenNotPaused
    {
        require(KF_Presale_end, "KF Token Presale is not ended !");
        require(
            totalSold_KCF_amount + amount <= KCF_TokenSupply,
            "Insufficient KCF token balances"
        );

        uint256 USDT_costs = amount * KCF_Price;
        uint256 allowance = USDT.allowance(msg.sender, address(this));
        require(
            allowance >= USDT_costs,
            "Allowance should be greater or equals to amount"
        );

        // Transfer USDT to this address
        USDT.transferFrom(msg.sender, address(this), USDT_costs);
        USDT.transfer(fundsWallet, USDT_costs);

        // Transfer KCF token 
        uint256 kcfAmount = amount * 10 ** 18;
        kcfToken.transfer(msg.sender, kcfAmount);
        hasPurchased_KCF_Tokens[msg.sender] = true;

        KCF_PurchasedData[msg.sender] = kcfAmount;

        emit KCF_TokensPurchased(msg.sender, kcfAmount);
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