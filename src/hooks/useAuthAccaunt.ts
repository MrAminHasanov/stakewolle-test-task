import { status } from "@/store/features/account/types";

import { useAccauntActions } from "@/store/features/account/hooks";
import { accauntIdSelector } from "@/store/features/account/selectors"
import { useSelector } from "react-redux"

export const useAuthAccaunt = (status: status) => {
    const accountId = useSelector(accauntIdSelector);
    const { getAccaunt } = useAccauntActions();

    if (status === "startLoading" && accountId === null) {
        getAccaunt()
    }
}