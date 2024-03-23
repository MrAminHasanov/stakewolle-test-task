import { chainInfo } from "@/constants/chainsConst";

interface thisWindow extends Window {
    ethereum?: any
}

const thisWindow: thisWindow = window;
export const metaMask = thisWindow.ethereum;

const metaReq = metaMask.request

export const accauntReq = async () => {
    return await metaReq(
        { method: "eth_requestAccounts" }
    );
}

export const balanceReq = async (accId: string, chainId: string) => {
    return await metaReq(
        {
            method: "eth_getBalance",
            params: [accId, chainId]
        }
    );
}

export const switchChainReq = async (chainId: string) => {
    return await metaReq(
        {
            method: "wallet_switchEthereumChain",
            params: [{ chainId }]
        }
    );

}

export const addChainReq = async (chainInfo: chainInfo) => {
    console.log(chainInfo)
    return await metaReq(
        {
            method: "wallet_addEthereumChain",
            params: [chainInfo]
        }
    );
}

export const getActiveChainIdReq = async () => {
    return await metaReq(
        { method: "eth_chainId" }
    );
}

export const getBlockReq = async () => {
    return await metaReq(
        { method: "eth_blockNumber" }
    );
}

export const getBalanceReq = async (accId: string, chainBlock: string) => {
    return await metaReq(
        {
            method: "eth_getBalance",
            params: [accId, chainBlock]
        }
    );
}

export const sendTransactionReq = async (from: string, to: string, value: string) => {
    return await metaReq(
        {
            method: "eth_sendTransaction",
            params: [{ from, to, value }]
        }
    );
}
