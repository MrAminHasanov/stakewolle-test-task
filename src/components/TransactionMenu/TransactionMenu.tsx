'use client'

import { FormEvent, useEffect, useState } from "react";

import { useAppSelector } from "@/hooks/reduxHooks";
import { useTransactionVerification } from "@/hooks/useTransactionVerification";
import { useSendTransaction } from "@/hooks/useSendTransaction";

import { activeChainStatusSelector, useChainActions } from "@/store/features/chain";
import { accauntIdSelector } from "@/store/features/account";
import { getMetaMask } from "@/functions/requests";

import { Box } from "@mui/material";
import NetworkTabs from "./NetworkTabs/NetworkTabs";
import ChainsPanel from "./ChainsPanel/ChainsPanel";
import TextAreas from "./TextAreas/TextAreas";
import SendTransaction from "./SendTransaction/SendTransaction";

function TransactionMenu() {
    const activeChainStatus = useAppSelector(activeChainStatusSelector);
    const accId = useAppSelector(accauntIdSelector);

    const [activePage, setActivePage] = useState(0);
    const [accepterId, setAccepterId] = useState("");
    const [sendedValue, setSendedValue] = useState("");
    const [submitMessage, setSubmitMessage] = useState("");

    const { getActualChainId, updateChain } = useChainActions();

    const verification =
        useTransactionVerification(
            sendedValue,
            accepterId,
            activePage ? "testNet" : "mainNet"
        )

    useEffect(() => {
        if (activeChainStatus === "init") {
            getActualChainId()
            getMetaMask().on("chainChanged", () => updateChain())
        } else if (activeChainStatus === "update") {
            getActualChainId()
        }
    }, [activeChainStatus])

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (verification.status === "succses") {
            useSendTransaction(accepterId, accId, sendedValue)
        }

        setSubmitMessage(verification.statusMessage)
    }

    return (
        <Box sx={{
            bgcolor: '#fff',
            display: "flex",
            flexDirection: "column",
            borderRadius: 1.5,
            width: "450px"
        }}>
            <NetworkTabs
                activePage={activePage}
                setActivePage={setActivePage} />
            <Box sx={{ padding: 3 }}
                onSubmit={onSubmit}
                component="form">
                <ChainsPanel activeNetwork={activePage ? "testNet" : "mainNet"} />
                <TextAreas
                    accepterId={accepterId}
                    sendedValue={sendedValue}
                    setAccepterId={setAccepterId}
                    setSendedValue={setSendedValue} />
                <SendTransaction
                    submitMessage={submitMessage} />
            </Box>
        </Box>
    )
}

export default TransactionMenu
