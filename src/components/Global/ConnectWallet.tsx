import Image from "next/image";
import wallet1 from "@/../public/images/wallet1.png";
import wallet2 from "@/../public/images/wallet2.png";

const ConnectWallet = () => {
  return (
    <div>
      <h2 className="my-text-32 text-primary-1 gap-mb-60">
        Connect Your Wallet
      </h2>
      <button className="btn w-full flex-centerY justify-between bg-BG-FFF-8 border border-stroct-1 gap-mb-24">
        <span className="my-text-16 font-medium">Conntect with Metamask</span>
        <Image width={32} height={32} src={wallet1} alt="wallet1" />
      </button>
      <button className="btn w-full flex-centerY justify-between bg-BG-FFF-8 border border-stroct-1">
        <span className="my-text-16 font-medium">Conntect with Metamask</span>
        <Image width={32} height={32} src={wallet2} alt="wallet2" />
      </button>
    </div>
  );
};

export default ConnectWallet;
