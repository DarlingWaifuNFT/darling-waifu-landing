import React, { useEffect, useState } from 'react'
import { injected } from '../utils/connectors';
import { useWeb3React } from '@web3-react/core'
import connectContract from '../utils/contractStore';
export default function useClaimPeach() {

    const { library, activate, account, chainId, active, networkId, error } = useWeb3React()
    const [contract, setContract] = useState(null)
    const [claimActive, setClaimActive] = useState(false)
    const [claimeable, setClaimeable] = useState(0)


    useEffect(() => { if (account) connectContractClaim() }, [library, account, chainId])


    const connectContractClaim = async () => {

        let contractClaim = await connectContract("0xc4E9e0e3a8E39e41A3e3F6F9cdFE7cc30C17E3ae", library)

        setContract(contractClaim)
        getClaimableToken(contractClaim)
    }

    const connectToMetamask = async () => {

        await activate(injected)


        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: `0x${Number(97).toString(16)}`,
                    chainName: "Binance Smart Chain Testnet",
                    nativeCurrency: {
                        name: "Binance Chain Native Token",
                        symbol: "BNB",
                        decimals: 18
                    },
                    rpcUrls: [
                        "https://data-seed-prebsc-1-s1.binance.org:8545",
                        "https://data-seed-prebsc-1-s1.binance.org:8545/",
                        "https://data-seed-prebsc-2-s1.binance.org:8545/",
                        "https://data-seed-prebsc-1-s2.binance.org:8545/",
                        "https://data-seed-prebsc-2-s2.binance.org:8545/",
                        "https://data-seed-prebsc-1-s3.binance.org:8545/",
                        "https://data-seed-prebsc-2-s3.binance.org:8545/",
                    ],
                    blockExplorerUrls: ["https://explorer.binance.org/smart-testnet"]
                }
            ]
        });


    }


    const getClaimableToken = async (contractClaim) => {
        console.log(contractClaim)
        let tempClaimeable = await contractClaim.methods.claimable(account).call({ from: account })
        console.log(tempClaimeable)
        setClaimeable(tempClaimeable / 10 ** 18)
        setClaimActive(true)
    }



    return { connectToMetamask, claimeable, claimActive }

}
