import ContractClaim from "./Contracts/Claim.json"



const connectContract = (tokenAddress, web3) => {

    let contractClaim = [{ "inputs": [{ "internalType": "address", "name": "_peachAddress", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "claim", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_target", "type": "address" }], "name": "claimable", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_target", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "setClaimable", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_targets", "type": "address[]" }, { "internalType": "uint256[]", "name": "_amounts", "type": "uint256[]" }], "name": "setMultiClaimable", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

    return web3
        ? new web3.eth.Contract(contractClaim, tokenAddress, {
            from: web3.eth.defaultAccount,
        })
        : null
}



export default connectContract