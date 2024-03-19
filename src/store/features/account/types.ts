export type status = "loading" | "succsess" | "error" | "startLoading";
export type accauntId = null | string
export type statusMessage = string

export interface initialStateType {
    status: status,
    statusMessage: statusMessage,
    accauntId: accauntId
}