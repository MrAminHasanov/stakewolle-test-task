export type status = "loading" | "succsess" | "error" | "init" | "update";
export type accauntId = string
export type statusMessage = string

export interface initialStateType {
    status: status,
    statusMessage: statusMessage,
    accauntId: accauntId,
}