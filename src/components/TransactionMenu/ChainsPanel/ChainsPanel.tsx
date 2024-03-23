import { chainInfo, networkChains } from "@/constants/chainsConst"
import { Box, Typography } from "@mui/material"

import ChainButton from "./ChainButton/ChainButton"
import { balanceSelector, balanceStatusSelector, useBalanceActions } from "@/store/features/balance";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useEffect } from "react";
import { accauntIdSelector } from "@/store/features/account";
import { activeChainSelector } from "@/store/features/chain";
import { getMetaMask } from "@/functions/requests";

interface componentProps {
    activeNetwork: string,
}

function ChainsPanel(
    { activeNetwork }
        : componentProps
) {
    const accId = useAppSelector(accauntIdSelector);
    const activeChainId = useAppSelector(activeChainSelector);
    const balanceStatus = useAppSelector(balanceStatusSelector);
    const balance = useAppSelector(balanceSelector);

    const { getBalance, updateBalance } = useBalanceActions();

    useEffect(() => {
        if (balanceStatus === "init") {
            getBalance(accId)
            getMetaMask().on("chainChanged", () => updateBalance())
            getMetaMask().on("accountsChanged", () => updateBalance())
        } else if (balanceStatus === "update") {
            getBalance(accId)
        }
    }, [balanceStatus])

    return (
        <Box>
            <Typography component="p" sx={{ fontWeight: "600", fontSize: "18px" }}>
                Select transaction chain
            </Typography>
            <Box sx={{ my: 0.6, display: "flex", flexWrap: "wrap" }}>
                {
                    networkChains[activeNetwork].map((chainInfo: chainInfo) =>
                        activeChainId === chainInfo.chainId
                            ? <ChainButton
                                isChainActive={true}
                                chainId={chainInfo.chainId}
                                balance={balance}
                                balanceStatus={balanceStatus}
                                key={chainInfo.chainId} />
                            : <ChainButton
                                chainId={chainInfo.chainId}
                                key={chainInfo.chainId} />
                    )
                }
            </Box>
        </Box>
    )
}

export default ChainsPanel
