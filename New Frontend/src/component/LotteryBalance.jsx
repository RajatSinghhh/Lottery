import { ethers } from "ethers";
import { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { Web3Context } from "../context/web3Context";

export const LotteryBalance = () => {
  const { lotteryContract } = useContext(Web3Context);
  const [balance, setBalance] = useState("0");

  const lotteryBalance = async () => {
    try {
      toast.loading("Fetching lottery balance...");
      
      const rawBalance = await lotteryContract.lotteryBalance(); // returns BigNumber
      const formattedBalance = ethers.formatUnits(rawBalance, 18);

      setBalance(formattedBalance);
      toast.dismiss(); // remove loading
      toast.success("Lottery balance fetched successfully!");
    } catch (error) {
      toast.dismiss(); // remove loading
      toast.error("Failed to fetch lottery balance check console for error");
      console.error(error);
    }
  };

  return (
  <div className="glass-strong rounded-2xl p-8 w-full border-gradient animate-fade-in">
    {/* Header */}
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
      <div>
        <h2 className="text-2xl font-bold gradient-text-primary">Prize Pool</h2>
        <p className="text-sm text-slate-400">Total lottery balance</p>
      </div>
    </div>

    {/* Balance Display */}
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 mb-6 border border-slate-700/50 relative overflow-hidden group">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <p className="text-sm text-slate-400 mb-2 flex items-center gap-2">
          <span className="status-dot status-active"></span>
          Current Pool
        </p>
        
        <div className="flex items-baseline gap-2">
          <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent number-counter">
            {balance || '0.00'}
          </span>
          <span className="text-2xl font-semibold text-slate-400">ETH</span>
        </div>

        {/* USD Equivalent (optional - you can remove if not needed) */}
        {balance && parseFloat(balance) > 0 && (
          <p className="text-sm text-slate-500 mt-2">
            ≈ ${(parseFloat(balance) * 2000).toLocaleString(undefined, { maximumFractionDigits: 2 })} USD
          </p>
        )}
      </div>

      {/* Decorative corner element */}
      <div className="absolute top-4 right-4 opacity-10">
        <svg className="w-16 h-16 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      </div>
    </div>

    {/* Refresh Button */}
    <button
      onClick={lotteryBalance}
      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3.5 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-3">
        <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Refresh Balance
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </button>

    {/* Info Footer */}
    <div className="mt-6 pt-6 border-t border-slate-700/50">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-slate-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span>Live on-chain data</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-xs text-emerald-400">Updated</span>
        </div>
      </div>
    </div>
  </div>
);

};
