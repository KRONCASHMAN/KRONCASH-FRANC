const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("KCFToken", function () {
    async function deployKCFContract() {
        const initSupply = 100000000; // Assuming 18 decimal places

        // Contracts are deployed using the first signer/account by default
        const [deployer] = await ethers.getSigners();

        const KCFToken = await ethers.getContractFactory("KCFToken");
        const kcfTokenInstance = await KCFToken.deploy(initSupply);

        return { kcfTokenInstance, deployer, initSupply };
    }

    describe("Deployment", function () {
        it("Should assign the total supply of tokens to the deployer", async function () {
            const { kcfTokenInstance, deployer, initSupply } = await deployKCFContract();

            expect(await kcfTokenInstance.balanceOf(deployer.address)).to.equal(initSupply);
        });
    });
});
