'use client'

import { useEffect } from "react"
import { useAppSelector } from "@/hooks/reduxHooks";

import { accauntStatusMessageSelector, accauntStatusSelector } from "@/store/features/account/selectors";
import { status, statusMessage } from "@/store/features/account/types";

import Loading from "../loading";

import { getMetaMask } from "@/functions/requests";
import { useAccauntActions } from "@/store/features/account";

function InitialProvider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const status: status = useAppSelector(accauntStatusSelector);
    const statusMessage: statusMessage = useAppSelector(accauntStatusMessageSelector);
    const { updateAccaunt, getAccaunt } = useAccauntActions();

    useEffect(() => {
        if (!getMetaMask()) {
            throw new Error("exstention not instaled")
        }
    }, [])

    useEffect(() => {
        if (status === "init") {
            getAccaunt()
            getMetaMask().on("accountsChanged", () => updateAccaunt())
        } else if (status === "update") {
            getAccaunt()
        }
    }, [status])

    const Content = () => {
        switch (status) {
            case "loading":
            case "init": {
                return <Loading />
            }
            case "error": {
                throw new Error(statusMessage)
            }
            case "succsess": {
                return children
            }
        }
    }


    return (
        <>
            {
                <Content />
            }
        </>
    )
}

export default InitialProvider