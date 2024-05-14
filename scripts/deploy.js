const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();
    const deployerAddress = await deployer.getAddress();
    const message0 = 'Deploying KronletCashFrancToken with address: ' + deployerAddress;
    console.log(message0);

    console.log("//////////////////////////////////////////////////////////////////////");
    console.log("//////////////////////////////////////////////////////////////////////");
      
    const KCFToken = await ethers.getContractFactory('KronletCashFrancToken');
    const KCFtokenFactory = await KCFToken.deploy();
  
    await KCFtokenFactory.deployed();
    const KCFtokenFactoryAddress = KCFtokenFactory.address
    console.log('KronletCashFrancToken contract deployed at', KCFtokenFactoryAddress);

    console.log("//////////////////////////////////////////////////////////////////////");
    console.log("//////////////////////////////////////////////////////////////////////");
    
    const message1 = 'Deploying the KronletFrancToken: ' + deployerAddress;
    console.log(message1);

    const KFToken = await ethers.getContractFactory('KronletCashFrancToken');
    const KFtokenFactory = await KFToken.deploy();
  
    await KFtokenFactory.deployed();
    const KFtokenFactoryAddress = KFtokenFactory.address
    console.log('KronletFrancToken contract deployed at', KFtokenFactoryAddress);

    console.log("//////////////////////////////////////////////////////////////////////");
    console.log("//////////////////////////////////////////////////////////////////////");
    
    const message2 = 'Deploying the Presale contract: ' + deployerAddress;
    console.log(message2);

    const Presale = await ethers.getContractFactory('Presale');
    const PresaleFactory = await Presale.deploy(KCFtokenFactoryAddress, KFtokenFactoryAddress);
  
    await PresaleFactory.deployed();
    const PresaleFactoryAddress = PresaleFactory.address
    console.log('Presale contract deployed at', PresaleFactoryAddress);

    console.log("//////////////////////////////////////////////////////////////////////");
    console.log("//////////////////////////////////////////////////////////////////////");
    
    const message3 = 'Deploying the Presale contract: ' + deployerAddress;
    console.log(message3);

    const KFStaking = await ethers.getContractFactory('KFStaking');
    const KFStakingFactory = await KFStaking.deploy(KCFtokenFactoryAddress, KFtokenFactoryAddress);
  
    await KFStakingFactory.deployed();
    const KFStakingFactoryAddress = PresaleFactory.address
    console.log('KF Token Staking contract deployed at', KFStakingFactoryAddress);
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  