import { Button, CircularProgress, Typography } from "@mui/material";
import { chainsIcon } from "@/asserts/icons/chainsIcon";
import { memo, useCallback } from "react";
import { ethers } from "ethers";
import { chainBlocks } from "@/constants/chainsConst";
import { useChainActions } from "@/store/features/chain";

interface componentProps {
    chainId: string,
    isChainActive?: boolean,
    balance?: string,
    balanceStatus?: "loading" | "success" | "init" | "update"
}


const subIcon = (chainId: string) => {
    const thisChain = Object.values(chainBlocks).find((chain) => chain.chainId === chainId);
    return (
        <span style={{ fontSize: "14px", padding: "0px 8px" }}> {thisChain?.chainName.slice(6)}</span >);
}

const ChainButton = memo((
    { isChainActive = false,
        chainId,
        balance,
        balanceStatus = "success" }: componentProps) => {
    const { switchChainNetwork } = useChainActions();

    let sortedBalance = "";
    if (!!balance) {
        sortedBalance = ethers.formatEther(balance).slice(0, 10)
    }

    const handleClick = useCallback(() => {
        if (!isChainActive) {
            const newChainInfo: any =
                Object.values(chainBlocks).find((chain) => chain.chainId === chainId)
            switchChainNetwork(newChainInfo);
        }
    }, [chainId, isChainActive])


    return (
        <Button
            variant={isChainActive ? "contained" : "outlined"}
            color="info"
            onClick={handleClick}
            startIcon={chainsIcon[chainId] ?? subIcon(chainId)}
            size={"large"}
            type="button"
            sx={{
                padding: 0.5,
                px: isChainActive ? 2 : 0,
                borderRadius: isChainActive ? 8 : 1,
                mr: 1.5,
                my: 0.6,
                display: "flex",
                aligItems: "center",
                minWidth:"50px"
            }}>
            {
                balanceStatus === "success"
                    ? sortedBalance
                    : <CircularProgress size={"16px"} />
            }
        </Button >
    )
})

export default ChainButton
