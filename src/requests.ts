
export const accauntReq = async () => {
    const thisWindow: any = window;

    return await thisWindow.ethereum.request({ method: "eth_requestAccounts" });
}