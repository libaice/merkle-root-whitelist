const hre = require("hardhat");

async function main() {

  const MerkleTreeExample = await hre.ethers.getContractFactory("MerkleTreeExample");
  const merkleExample = await MerkleTreeExample.deploy("0xed11babc5ca62145e26e7d778f8e4da0ff3f9ba2eb1447b4090c57929a141a15");

  await merkleExample.deployed();

  console.log(
    `merkleExample deployed to ${merkleExample.address} `
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
