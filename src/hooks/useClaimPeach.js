import React, { useEffect, useState } from 'react'
import { injected } from '../utils/connectors';
import { useWeb3React } from '@web3-react/core'
import connectContract from '../utils/contractStore';
export default function useClaimPeach() {

    const { library, activate, account, chainId, active, networkId, error } = useWeb3React()
    const [contract, setContract] = useState(null)
    const [claimeable, setClaimeable] = useState(0)


    useEffect(() => { if (account) connectContractClaim() }, [library, account, chainId])

    useEffect(() => {


        window.ethereum?.request({
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: `0x38`,
                    chainName: "Binance Smart Chain",
                    nativeCurrency: {
                        name: "Binance Coin",
                        symbol: "BNB",
                        decimals: 18
                    },
                    rpcUrls: ['https://bsc-dataseed.binance.org/'],
                    blockExplorerUrls: ['https://bscscan.com']
                }
            ]
        });


    }, [chainId])


    const connectContractClaim = async () => {

        let contractClaim = await connectContract("0x31C79a0Dfeb60Ef25c61d8160db045a2f168407A", library)
        setContract(contractClaim)
        getClaimableToken(contractClaim)
    }

    const connectToMetamask = () => {
        activate(injected)

        window.ethereum?.request({
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: `0x38`,
                    chainName: "Binance Smart Chain",
                    nativeCurrency: {
                        name: "Binance Coin",
                        symbol: "BNB",
                        decimals: 18
                    },
                    rpcUrls: ['https://bsc-dataseed.binance.org/'],
                    blockExplorerUrls: ['https://bscscan.com']
                }
            ]
        });
    }



    const getClaimableToken = async (contractClaim) => {
        let tempClaimeable = await contractClaim.methods.claimable(account).call({ from: account })
        setClaimeable(tempClaimeable / 10 ** 18)
    }

    const claimTokens = async () => {

        try {
            if (account && claimeable.toString() !== "0") {

                await contract.methods.claim().send({ from: account, value: 1 + '0'.repeat(15) })
                setClaimeable("0")
            }
        } catch (error) {
            console.log(error)

        }



    }



    return { connectToMetamask, claimeable, claimTokens, account }

}
