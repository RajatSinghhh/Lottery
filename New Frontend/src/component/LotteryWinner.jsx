import { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { Web3Context } from "../context/web3Context";

export const LotteryWinner = () => {
  const [address, setAddress] = useState("");
  const { lotteryContract } = useContext(Web3Context);

  const lotteryWinner = async () => {
    try {
      toast.loading("Fetching lottery winner...");
      const winnerAddress = await lotteryContract.lotteryWinner(); // likely returns address string
      setAddress(winnerAddress);
      toast.dismiss();
      toast.success("Winner fetched successfully!");
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to fetch winner check console for error");
      console.error(error);
    }
  };

 return (
  <div className="glass-strong rounded-2xl p-8 w-full border-gradient animate-fade-in">
    {/* Header */}
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30 animate-pulse">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      </div>
      <div>
        <h2 className="text-2xl font-bold gradient-text-primary">Latest Winner</h2>
        <p className="text-sm text-slate-400">Most recent champion</p>
      </div>
    </div>

    {/* Winner Display */}
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 mb-6 border border-slate-700/50 relative overflow-hidden group">
      {/* Animated confetti background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <p className="text-sm text-slate-400 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Winner Address
        </p>
        
        {address && address !== "N/A" ? (
          <div className="space-y-3">
            {/* Full Address Display */}
            <div className="flex items-center gap-2 bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
              <code className="text-sm md:text-base font-mono text-amber-400 break-all flex-1">
                {address}
              </code>
              <button
                onClick={() => navigator.clipboard.writeText(address)}
                className="flex-shrink-0 p-2 hover:bg-slate-700/50 rounded-lg transition-colors group/copy"
                title="Copy address"
              >
                <svg className="w-4 h-4 text-slate-400 group-hover/copy:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>

            {/* Shortened Display for Mobile */}
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>Congratulations to the winner! 🎉</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="inline-flex items-center gap-2 text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-base">No winner yet</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">The next draw is coming soon!</p>
          </div>
        )}
      </div>

      {/* Decorative trophy element */}
      <div className="absolute top-4 right-4 opacity-10">
        <svg className="w-16 h-16 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
    </div>

    {/* Check Winner Button */}
    <button
      onClick={lotteryWinner}
      className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-3.5 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-3">
        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Check Winner
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </button>

    {/* Authorization Warning */}
    <div className="mt-6 pt-6 border-t border-slate-700/50">
      <div className="flex items-start gap-2 text-xs text-amber-400/80 bg-amber-500/5 border border-amber-500/20 rounded-lg p-3">
        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <div>
          <p className="font-semibold mb-1">Authorization Required</p>
          <p className="text-slate-400">Only authorized contract operators can call this function to determine the winner.</p>
        </div>
      </div>
    </div>
  </div>
);

};
