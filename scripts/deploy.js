const hre = require("hardhat");

async function main() {
  const VotingOrganization = await hre.ethers.getContractFactory(
    "VotingOrganization"
  );
  const voting = await VotingOrganization.deploy();

  await voting.deployed();

  console.log("CONTRACT_ADDRESS:", voting.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Step 1 :   npx hardhat node
// Step 2 :
//npx hardhat run scripts/deploy.js --network polygon_amoy
//npx hardhat run scripts/deploy.js --network localhost     //  For localhost
