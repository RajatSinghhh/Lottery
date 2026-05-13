import { toast } from "react-hot-toast";
import { Web3Context } from "../context/web3Context";
import { useContext, useState } from "react";
import { ethers } from "ethers";

export const EnterLottery = () => {
  const { lotteryContract } = useContext(Web3Context);
  const [amountInUint, setAmountInUint] = useState("");

  const enterLottery = async (e) => {
    e.preventDefault();
    try {
      if (!amountInUint || isNaN(amountInUint)) {
        toast.error("Please enter a valid number");
        return;
      }

      const amountInEther = ethers.parseEther(amountInUint);
      const transaction = await lotteryContract.enterLottery({
        value: amountInEther,
      });
      await toast.promise(transaction.wait(1), {
        loading: "Transaction is loading...",
        success: "Transaction successful!",
        error: "Transaction failed.",
      });

      setAmountInUint("");
    } catch (error) {      
      toast.error("Transaction failed check console for error");
      console.error(error)
      
    }
  };

  return (
  <div className="glass-strong rounded-2xl p-8 w-full border-gradient hover-glow animate-fade-in">
    {/* Header Section */}
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold gradient-text-primary">Enter Lottery</h2>
          <p className="text-sm text-slate-400">Buy your ticket now</p>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="glass px-3 py-1.5 rounded-lg">
          <span className="text-xs text-slate-400">Min: 0.01 ETH</span>
        </div>
      </div>
    </div>

    {/* Form */}
    <form onSubmit={enterLottery} className="space-y-5">
      {/* Input Field with Icon */}
      <div className="relative group">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <input
          type="text"
          placeholder="Enter amount in ETH"
          value={amountInUint}
          onChange={(e) => setAmountInUint(e.target.value)}
          className="w-full bg-slate-800/50 border border-slate-700 text-slate-100 rounded-xl pl-12 pr-20 py-4 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 placeholder-slate-500"
        />
        
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <span className="text-sm font-semibold text-slate-300 bg-slate-700/50 px-3 py-1 rounded-lg">
            ETH
          </span>
        </div>
      </div>

      {/* Quick Amount Buttons */}
      <div className="grid grid-cols-4 gap-2">
        {['0.01', '0.05', '0.1', '0.5'].map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => setAmountInUint(amount)}
            className="glass text-slate-300 text-sm py-2 rounded-lg hover:bg-slate-700/50 hover:text-white transition-all duration-200 border border-slate-700 hover:border-indigo-500/50"
          >
            {amount}
          </button>
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-3">
          <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
          Enter Lottery
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </button>
    </form>

    {/* Info Section */}
    <div className="mt-6 pt-6 border-t border-slate-700/50">
      <div className="flex items-start gap-3 text-sm text-slate-400">
        <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <div>
          <p className="mb-1">Your entry is recorded on the blockchain. The winner is selected fairly using a verifiable random function.</p>
          <p className="text-xs text-slate-500 mt-2">💡 Tip: Higher entries increase your chances!</p>
        </div>
      </div>
    </div>
  </div>
);

};
