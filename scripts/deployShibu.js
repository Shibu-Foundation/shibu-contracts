const {Shibu} = require('../secrets.json')
const {DeployModel} = require('./deploy.model')


async function main() {

    let deployData = new DeployModel()

    const Shibu = await ethers.getContractFactory("Shibu");

    await com.deployed();
    console.log("Shibu deployed to:", com.address);

    deployData.Shibu = com
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