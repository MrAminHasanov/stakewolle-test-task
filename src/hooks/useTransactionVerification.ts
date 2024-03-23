import { useAppSelector } from "./reduxHooks";
import { accauntIdSelector } from "@/store/features/account";
import { activeChainSelector } from "@/store/features/chain";
import { balanceSelector } from "@/store/features/balance";

import { ethers } from "ethers";

import { networkChains } from "@/constants/chainsConst";
import { accIdRegax, valueRegax } from "@/constants/regExp";

interface veryfication {
    status: "succses" | "faille",
    statusMessage: string,
}

export const useTransactionVerification = (
    sendedValue: string,
    accepterId: string,
    activePage: "mainNet" | "testNet"): veryfication => {
    const accauntId = useAppSelector(accauntIdSelector);
    const activeChain = useAppSelector(activeChainSelector);
    const chainBalance = useAppSelector(balanceSelector);

    let sendedValueNumb;

    const availableChains = networkChains[activePage];
    const isActiveChainAvailable = !availableChains.some(({ chainId }) => chainId === activeChain);

    if (isActiveChainAvailable) {
        return {
            status: "faille",
            statusMessage: `Please select or connect to chain from ${activePage} list`
        }
    }

    if (
        (accepterId === "" && Number(accepterId) === 0) ||
        (sendedValue === "" && Number(sendedValue) === 0)
    ) {
        return {
            status: "faille",
            statusMessage: `You must fiel all textAreas`
        }
    }

    if (!accIdRegax.test(accepterId)) {
        return {
            status: "faille",
            statusMessage: "Incorrect Send To Id"
        }
    }

    if (accepterId === accauntId) {
        return {
            status: "faille",
            statusMessage: "You can not send chains to yourself"
        }
    }

    if (!isNaN(Number(sendedValue))) {
        sendedValueNumb = Number(sendedValue);
    } else if (valueRegax.test(sendedValue)) {
        sendedValueNumb = Number(ethers.formatEther(sendedValue))
    } else {
        return {
            status: "faille",
            statusMessage: "Incorrect value type"
        }
    }

    if (sendedValueNumb === 0) {
        return {
            status: "faille",
            statusMessage: "Sended value must be greather than 0"
        }
    }
    
    const chainBalanceNumb = Number((ethers.formatEther(chainBalance)));
    if (sendedValueNumb > chainBalanceNumb) {
        return {
            status: "faille",
            statusMessage: "You don't have enough value on your balance"
        }
    }

    return {
        status: "succses",
        statusMessage: ""
    }
}