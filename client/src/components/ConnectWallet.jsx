import { Web3Button, Web3Modal, useWeb3Modal } from "@web3modal/react";
import { EthereumClient } from "@web3modal/ethereum";
import { sepolia } from "wagmi";
import { projectId, wagmiConfig } from "../main.jsx";

const ConnectWallet = () => {
  const chains = [sepolia];

  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  const { open } = useWeb3Modal();

  return (
    <div className="w-full h-[100vh] flex flex-col pt-[30px] items-center justify-center bg-slate-300">
      <div className="hidden">
        <Web3Button />
      </div>

      <div className="w-[60%] border-[2px] rounded-[10px] flex flex-col items-center gap-[30px] p-[20px]">
        <div className=" text-center flex flex-col gap-[20px]">
          <h1 className="font-poppins text-[30px] font-semibold">Blockmate</h1>
          <span className="font-poppins px-[40px]">
            Blockmate lets you easily chat and send things like NFTs, tokens,
            and coins to your crypto friends on different blockchains, all while
            keeping it safe. Just by starting with your friend&apos;s address!
          </span>
          <span className="font-poppins px-[40px]">
            we&apos;ve covered you to
          </span>
          <div className="self-center flex  items-start gap-[20px] font-[400] text-[17px]">
            <span>✔️ Chatting with mates!</span>
            <span>✔️ Cross chain transfers.</span>
            <span>✔️ NFT/Coin/Token transfers.</span>
          </div>
        </div>

        <button
          className="w-max h-max py-[12px] px-[25px] select-none bg-indigo-500 text-[20px] font-semibold font-poppins rounded-[8px]"
          onClick={open}
        >
          Connect Wallet
        </button>
      </div>

      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        defaultChain={sepolia}
        themeVariables={{}}
      />
    </div>
  );
};

export default ConnectWallet;
