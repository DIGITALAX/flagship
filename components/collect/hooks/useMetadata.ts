import { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useContractRead,
  useAccount,
  useWaitForTransaction,
} from "wagmi";
import { useMetadataResults } from "../../../types/general.types";
import { ethers } from "ethers";

const useMetadata = (): useMetadataResults => {
  const { address } = useAccount();
  const [enabled, setEnabled] = useState<boolean>(false);
  const [args, setArgs] = useState<number | any | any>();
  const [price, setPrice] = useState<string>();
  const [contractAddress, setContractAddress] = useState<string>();
  const [errorState, setErrorState] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [abiFunction, setAbiFunction] = useState<string>();
  const [hash, setHash] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const { isSuccess } = useWaitForTransaction({
    hash: hash,
  });

  const { data } = useContractRead({
    address: "0x850A7c6fE2CF48eea1393554C8A3bA23f20CC401",
    abi: [
      {
        name: "isModuleApproved",
        type: "function",
        stateMutability: "view",
        inputs: [
          { internalType: "address", name: "_user", type: "address" },
          { internalType: "address", name: "_module", type: "address" },
        ],

        outputs: [{ internalType: "bool", name: "", type: "bool" }],
      },
    ],
    functionName: "isModuleApproved",
    args: [address, "0x6170B3C3A54C3d8c854934cBC314eD479b2B29A3"],
  });

  const { config, isError } = usePrepareContractWrite({
    address:
      abiFunction === "collection"
        ? contractAddress
        : "0x6170B3C3A54C3d8c854934cBC314eD479b2B29A3",
    abi:
      abiFunction === "collection"
        ? [
            {
              name: "purchase",
              type: "function",
              stateMutability: "payable",
              inputs: [
                { internalType: "uint256", name: "quantity", type: "uint256" },
              ],
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            },
          ]
        : [
            {
              name: "fillAsk",
              type: "function",
              stateMutability: "payable",
              inputs: [
                {
                  internalType: "address",
                  name: "_tokenContract",
                  type: "address",
                },
                { internalType: "uint256", name: "_tokenId", type: "uint256" },
                {
                  internalType: "address",
                  name: "_fillCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_fillAmount",
                  type: "uint256",
                },
                { internalType: "address", name: "_finder", type: "address" },
              ],

              outputs: [],
            },
          ],
    functionName: abiFunction === "collection" ? "purchase" : "fillAsk",
    onError(error: any) {
      if (
        error.code == "INSUFFICIENT_FUNDS"
      ) {
        setErrorState(true);
      }
    },
    enabled: Boolean(enabled),
    args: args,
    overrides: {
      from: address,
      value: price,
    },
  });

  const { writeAsync, isLoading } = useContractWrite(config);

  const prepareNFTDataCollection = (
    address: string,
    price: number,
    amount: number
  ): void => {
    setEnabled(true);
    const contractArgs: number[] = [1];
    setContractAddress(address);
    setPrice(ethers.utils.parseEther(price.toString()));
    setArgs(contractArgs);
  };

  const collectNFT = async (): Promise<void> => {
    if (errorState) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorState(false);
        setErrorMessage(false);
      }, 4000);
      return;
    }
    setLoading(true);
    try {
      const tx: any = await writeAsync?.();
      setHash(tx.hash);
      const res: any = await tx?.wait();
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      console.error(err);
    }
    setEnabled(false);
  };

  const collectMarket = async (): Promise<void> => {
    if (errorState) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorState(false);
        setErrorMessage(false);
      }, 4000);
      return;
    }
    setLoading(true);
    try {
      const tx: any = await writeAsync?.();
      setHash(tx.hash);
      const res: any = await tx?.wait();
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      console.error(err);
    }
    setEnabled(false);
  };

  const prepareNFTDataMarket = (
    address: string,
    price: number,
    amount: number
  ): void => {
    setEnabled(true);
    const contractArgs = [
      address,
      "1",
      "0x0000000000000000000000000000000000000000",
      ethers.utils.parseEther(price.toString()),
      "0x0000000000000000000000000000000000000000",
    ];
    setContractAddress(address);
    setPrice(ethers.utils.parseEther(price.toString()));
    setArgs(contractArgs);
  };

  return {
    collectNFT,
    errorState,
    prepareNFTDataCollection,
    errorMessage,
    collectMarket,
    prepareNFTDataMarket,
    setAbiFunction,
    isLoading,
    isSuccess,
    loading,
    isError,
    data
  };
};

export default useMetadata;
