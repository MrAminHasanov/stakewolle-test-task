export interface chainInfo {
    chainId: string,
    chainName: string,
    rpcUrls: string[]
};

interface chainBlocks {
    [chainName: string]: chainInfo
}

interface networkChains {
    [networkName: string]: chainInfo[]
}

export const chainBlocks: chainBlocks = {
    bnb: {
        chainId: "0x38",
        chainName: "BNB Chain",
        rpcUrls: ["https://bsc-dataseed.binance.org/"]
    },
    eth: {
        chainId: "0x1",
        chainName: "Ethereum Mainnet",
        rpcUrls: ["https://mainnet.infura.io/v3/"]
    },
    SepoliaETH: {
        chainId: "0x106a",
        chainName: "Lisk Sepolia Testnet",
        rpcUrls: ["https://rpc.sepolia-api.lisk.com"]
    },
    OPSepolia: {
        chainId: "0xaa37dc",
        chainName: "OP Sepolia Testnet",
        rpcUrls: ["https://optimism-sepolia.blockpi.network/v1/rpc/public"]
    }
}

export const networkChains: networkChains = {
    "testNet": [chainBlocks.SepoliaETH,chainBlocks.OPSepolia],
    "mainNet": [chainBlocks.bnb, chainBlocks.eth]
}
