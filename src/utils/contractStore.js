import ContractClaim from "./Contracts/Claim.json"



const connectContract = (tokenAddress, web3) => {
    return web3
        ? new web3.eth.Contract(ContractClaim, tokenAddress, {
            from: web3.eth.defaultAccount,
        })
        : null
}



export default connectContract