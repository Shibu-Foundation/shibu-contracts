const { DeployModel } = require('./deploy.model')
const hre = require("hardhat");

async function main() {
    let deployData = new DeployModel()

    const IterableMapping = await ethers.getContractFactory("IterableMapping");
    const iterableMappingDeployed = await IterableMapping.deploy();
    await iterableMappingDeployed.deployed();

    console.log("IterableMapping deployed to address: ", iterableMappingDeployed.address);

    console.log("-------------------");

    console.log("Staring verify IterableMapping address: ", iterableMappingDeployed.address);
    hre.run("verify:verify", {
        address: iterableMappingDeployed.address
    });

    console.log("--------------------");

    const shibuContract = await ethers.getContractFactory("Shibu", {
        libraries: {
            IterableMapping: iterableMappingDeployed.address,
        },
    });

    const shibuContractDeployed = await shibuContract.deploy();
    await shibuContractDeployed.deployed();

    console.log("Shibu deployed to address: ", shibuContractDeployed.address);

    console.log("--------------------");
    console.log("Staring verify shibuContract address: ", shibuContractDeployed.address);

    hre.run("verify:verify", {
        address: shibuContractDeployed.address,
        libraries: {
            IterableMapping: iterableMappingDeployed.address,
        }
    });

    console.log("DONE !!! -------");

    deployData.Shibu = shibuContractDeployed
    deployData.toJsonFile()
    return deployData;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });