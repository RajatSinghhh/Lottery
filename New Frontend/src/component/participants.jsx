import { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { Web3Context } from "../context/web3Context";

export const Participants = () => {
  const [addresses, setAddresses] = useState([]);
  const { lotteryContract } = useContext(Web3Context);

  const participants = async () => {
    try {
      toast.loading("Fetching participants...");
      const participantsList = await lotteryContract.participants(); // assume returns array
      setAddresses(participantsList);
      toast.dismiss();
      toast.success("Participants fetched successfully!");
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to fetch participants check console for error ");
      console.error(error);
    }
  };

  return (
  <div className="glass-strong rounded-2xl p-8 w-full border-gradient animate-fade-in">
    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold gradient-text-primary">Participants</h2>
          <p className="text-sm text-slate-400">Active lottery entries</p>
        </div>
      </div>
      
      {/* Participant Count Badge */}
      {addresses.length > 0 && (
        <div className="glass px-4 py-2 rounded-xl">
          <div className="flex items-center gap-2">
            <span className="status-dot status-active"></span>
            <span className="text-lg font-bold text-indigo-400">{addresses.length}</span>
            <span className="text-sm text-slate-400">
              {addresses.length === 1 ? 'Entry' : 'Entries'}
            </span>
          </div>
        </div>
      )}
    </div>

    {/* Fetch Participants Button */}
    <button
      onClick={participants}
      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3.5 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden mb-6"
    >
      <span className="relative z-10 flex items-center gap-3">
        <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Load Participants
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </button>

    {/* Participants List */}
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 overflow-hidden">
      {addresses.length > 0 ? (
        <div className="max-h-96 overflow-y-auto custom-scrollbar">
          <div className="divide-y divide-slate-700/50">
            {addresses.map((addr, idx) => (
              <div
                key={idx}
                className="p-4 hover:bg-slate-700/30 transition-colors duration-200 group/item animate-fade-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-center justify-between gap-3">
                  {/* Participant Number */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                      <span className="text-xs font-bold text-indigo-400">#{idx + 1}</span>
                    </div>
                    
                    {/* Address */}
                    <code className="text-sm font-mono text-slate-300 break-all flex-1">
                      {addr}
                    </code>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => navigator.clipboard.writeText(addr)}
                    className="flex-shrink-0 p-2 hover:bg-slate-600/50 rounded-lg transition-all duration-200 opacity-0 group-hover/item:opacity-100"
                    title="Copy address"
                  >
                    <svg className="w-4 h-4 text-slate-400 hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-700/30 mb-4">
            <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="text-slate-400 text-base mb-2">No participants loaded</p>
          <p className="text-xs text-slate-500">Click the button above to load active participants</p>
        </div>
      )}
    </div>

    {/* Info Footer */}
    {addresses.length > 0 && (
      <div className="mt-6 pt-6 border-t border-slate-700/50">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-slate-400">
            <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>Each address represents one entry</span>
          </div>
        </div>
      </div>
    )}

    {/* Custom Scrollbar Styles */}
    <style jsx>{`
      .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(15, 23, 42, 0.5);
        border-radius: 4px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(99, 102, 241, 0.5);
        border-radius: 4px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(99, 102, 241, 0.7);
      }
    `}</style>
  </div>
);

};
