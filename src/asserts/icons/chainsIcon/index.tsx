import { SiBitcoin } from "react-icons/si";
import { FaEthereum } from "react-icons/fa6";

import { chainBlocks } from "@/constants/chainsConst";

export const chainsIcon = {
    [chainBlocks.eth.chainId]: <FaEthereum />,
    [chainBlocks.bnb.chainId]: <SiBitcoin />,
}