'use client'

import { memo, useEffect } from "react"

import { accauntStatusMessageSelector, accauntStatusSelector } from "@/store/features/account/selectors";
import { status, statusMessage } from "@/store/features/account/types";

import { useAuthAccaunt } from "@/hooks/useAuthAccaunt";
import { useSelector } from "react-redux";
import Loading from "../loading";

function InitialProvider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const status: status = useSelector(accauntStatusSelector);
    const statusMessage: statusMessage = useSelector(accauntStatusMessageSelector);

    useEffect(() => {
        const thisWindow: any = window;
        if (!thisWindow.ethereum) {
            throw new Error("exstention not instaled")
        }
    }, [])

    useAuthAccaunt(status);

    const Content = memo(
        ({ status, children }: { status: status, children: React.ReactNode; }) => {
            switch (status) {
                case "loading":
                case "startLoading": {
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
    )

    return (
        <>
            {
                <Content status={status} children={children} />
            }
        </>
    )
}

export default InitialProvider