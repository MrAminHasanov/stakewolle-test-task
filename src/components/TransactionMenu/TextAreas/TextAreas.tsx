import { useAppSelector } from "@/hooks/reduxHooks"

import { accauntId } from "@/store/features/account/types";
import { accauntIdSelector } from "@/store/features/account/selectors"

import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface componentProps {
    accepterId: string,
    sendedValue: string,
    setAccepterId: (arg: string) => void,
    setSendedValue: (arg: string) => void,
}

function TextAreas({ accepterId, setAccepterId, sendedValue, setSendedValue }: componentProps) {
    const accauntId: accauntId = useAppSelector(accauntIdSelector);

    const handlerSendedValueChange = (event: ChangeEvent<HTMLInputElement>): void =>
        setSendedValue(event.target.value);

    const handlerAccepterIdChange = (event: ChangeEvent<HTMLInputElement>): void =>
        setAccepterId(event.target.value);

    return (
        <>
            <TextField
                id="Account id"
                label="Account id"
                size="small"
                value={accauntId}
                disabled
                fullWidth={true} />
            <TextField
                id="send To"
                label="Send to"
                value={accepterId}
                onChange={handlerAccepterIdChange}
                size="small"
                focused
                fullWidth={true} />
            <TextField
                id="value"
                label="Value"
                value={sendedValue}
                onChange={handlerSendedValueChange}
                size="small"
                focused
                fullWidth={true} />
        </>
    )
}

export default TextAreas