import ContractClaim from "./Contracts/Claim.json";

const connectContract = (tokenAddress, web3) => {
  let contractClaim = [
    {inputs: [], stateMutability: "nonpayable", type: "constructor"},
    {
      inputs: [
        {internalType: "address[]", name: "_targets", type: "address[]"},
        {internalType: "uint256[]", name: "_amounts", type: "uint256[]"},
      ],
      name: "addMultiClaimable",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "claim",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{internalType: "address", name: "_target", type: "address"}],
      name: "claimable",
      outputs: [{internalType: "uint256", name: "", type: "uint256"}],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {internalType: "address", name: "_target", type: "address"},
        {internalType: "uint256", name: "_amount", type: "uint256"},
      ],
      name: "setClaimable",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {internalType: "address[]", name: "_targets", type: "address[]"},
        {internalType: "uint256[]", name: "_amounts", type: "uint256[]"},
      ],
      name: "setMultiClaimable",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {stateMutability: "payable", type: "receive"},
  ];

  return web3
    ? new web3.eth.Contract(contractClaim, tokenAddress, {
        from: web3.eth.defaultAccount,
      })
    : null;
};

export default connectContract;
