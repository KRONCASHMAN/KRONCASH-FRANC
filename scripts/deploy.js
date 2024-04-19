const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();
    const deployerAddress = await deployer.getAddress();
    const message0 = 'Deploying Token staking with address: ' + deployerAddress;
    console.log(message0);
    //////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////
  
    const TOKENFACTORY = await ethers.getContractFactory('Staking');
    const tokenFactory = await TOKENFACTORY.deploy("0x8Fb7a3d213C3a2B605386cd3617fE0eaaB7F3b1c");
    // const tokenFactory = await TOKENFACTORY.deploy('A2HeroesTest', 'A2HT', 'Monika', '0x42cCf0f32453547dACB0e36bf5dBcC03Fd234ea5');
    await tokenFactory.deployed();
    const tokenFactoryAddress = tokenFactory.address
    console.log('Token contract deployed at', tokenFactoryAddress);
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  