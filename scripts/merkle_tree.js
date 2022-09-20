// https://medium.com/@ItsCuzzo/using-merkle-trees-for-nft-whitelists-523b58ada3f9
//
const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

let whitelistAddresses = [
    "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0XDCAB482177A592E424D1C8318A464FC922E8DE40",
    "0X6E21D37E07A6F7E53C7ACE372CEC63D4AE4B6BD0",
    "0X09BAAB19FC77C19898140DADD30C4685C597620B",
    "0XCC4C29997177253376528C05D3DF91CF2D69061A",
    "0xdD870fA1b7C4700F2BD7f44238821C26f7392148" // The address in remix
  ];

const leafNodes = whitelistAddresses.map(addr => keccak256(addr));

const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});


const rootHash = merkleTree.getRoot();
console.log('Whitelist Merkle Tree\n', merkleTree.toString());
console.log("Root Hash: ", rootHash);

// root hash -> hex    set to contract 
console.log("Root Hash: ", rootHash.toString('hex'));



console.log("==============================");
//  ec5757362df6b26ed556999af5342892293d8e5a960c1559fd86bc35421e2cfd


const useraddr = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'
const userKeccakProof = keccak256(useraddr)
console.log(" user keckack proof  ", userKeccakProof);

const hexProof = merkleTree.getHexProof(userKeccakProof);

console.log(hexProof);

console.log(merkleTree.verify(hexProof, userKeccakProof, rootHash));

