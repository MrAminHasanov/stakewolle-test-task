import { sendTransactionReq } from "@/functions/requests";

export const useSendTransaction = (
    accepterId: string,
    accId: string,
    value: string
) => {
    let sortedValue = value;
    if (!isNaN(Number(value))) {
        sortedValue = "0x" + Number(value.slice(2)).toString(16);
    }
    sendTransactionReq(accId, accepterId, sortedValue);
}