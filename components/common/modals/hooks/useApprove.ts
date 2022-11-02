import { useContext, useState } from "react";
import { useContractWrite } from "wagmi";
import { usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { CollectContext } from "../../../../pages/collect/[name]";
import { useApproveResults } from "../../../../types/general.types";

const useApprove = (): useApproveResults => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [args, setArgs] = useState<any[]>();
  const [hash, setHash] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const { setApprovedSuccess } = useContext(CollectContext);

  const { isSuccess } = useWaitForTransaction({
    hash: hash,
  });
  const { config } = usePrepareContractWrite({
    address: "0x850A7c6fE2CF48eea1393554C8A3bA23f20CC401",
    abi: [
      {
        name: "setApprovalForModule",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [
          { internalType: "address", name: "_module", type: "address" },
          { internalType: "bool", name: "_approved", type: "bool" },
        ],

        outputs: [],
      },
    ],
    functionName: "setApprovalForModule",
    onError(error: any) {
      console.error("Error", error);
    },
    enabled: Boolean(enabled),
    args: args,
  });

  const { writeAsync, isLoading } = useContractWrite(config);

  const prepareApproval = (): void => {
    setEnabled(true);
    const contractArgs: any[] = [
      "0x6170B3C3A54C3d8c854934cBC314eD479b2B29A3",
      true,
    ];
    setArgs(contractArgs);
  };

  const approveAddress = async (): Promise<void> => {
    setLoading(true);
    try {
      const tx: any = await writeAsync?.();
      setHash(tx.hash);
      const res: any = await tx?.wait();
      setLoading(false);
      setApprovedSuccess(true);
    } catch (err: any) {
      setLoading(false);
      console.error(err);
    }
    setEnabled(false);
  };

  return { prepareApproval, approveAddress, isLoading, isSuccess, loading };
};

export default useApprove;
