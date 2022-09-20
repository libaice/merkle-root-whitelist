const ethers = require('ethers')
const provider = new ethers.providers.JsonRpcProvider(`http://127.0.0.1:8545`)


const ERC20_ABI = [
    "function whitelistMint(bytes32[] calldata _merkleProof) public "
]



const main = async () => {

    // Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
    // Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

    const rootHash = ''
    const useraddr = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
    const userKeccakProof = keccak256(useraddr)
    console.log(" user keckack proof  ", userKeccakProof);

    const hexProof = merkleTree.getHexProof(userKeccakProof);

    console.log(hexProof);

    console.log(merkleTree.verify(hexProof, userKeccakProof, rootHash));





    // // remix first address export private key
    // const userPrivateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

    // // deploy in localhost 
    // const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    // const contract = new ethers.Contract(contractAddress, ERC20_ABI, provider);
    // const contractWallet = contract.connect(wallet);


    // const useraddr = wallet.address;

    // const userKeccakProof = keccak256(useraddr)
    // console.log(" user keckack proof  ", userKeccakProof);

    // const hexProof = merkleTree.getHexProof(userKeccakProof);

    // console.log(hexProof);

    // console.log(merkleTree.verify(hexProof, userKeccakProof, rootHash));
}

main()