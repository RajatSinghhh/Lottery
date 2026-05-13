import { useState } from "react";
import { connectWallet } from "./connectWallet";
import { Web3Context } from "../context/web3Context";

export const Wallet = ({children}) => {
    const [state,setState] = useState({
        provider: null,
        selectedAccount: null,
        lotteryContract: null,
    })
    
    const handleWallet = async() => {
        try {
            const {provider, selectedAccount, lotteryContract} = await connectWallet()
            setState({provider, selectedAccount, lotteryContract})
        }
        catch (error) {
            console.log("Error Connecting to wallet")
        }
    }

    return (
        <Web3Context.Provider value={state}>
            {/* Children content */}
            {children}
            
            {/* Wallet Button - Absolute positioned AFTER children */}
            <button
                onClick={handleWallet}
                className="absolute top-6 right-6 z-50 group animate-fade-in"
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}
            >
                <div className="glass-strong px-5 py-3 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 flex items-center gap-3">
                    {state.selectedAccount ? (
                        <>
                            {/* Connected State */}
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
                                </div>
                                <div className="flex flex-col items-start min-w-0">
                                    <span className="text-xs text-slate-400 font-medium">Connected</span>
                                    <code className="text-sm font-mono text-slate-200 font-semibold truncate max-w-[120px]">
                                        {state.selectedAccount.slice(0, 6)}...{state.selectedAccount.slice(-4)}
                                    </code>
                                </div>
                                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Disconnected State */}
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
                                    <span className="text-white text-lg">🦊</span>
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="text-sm font-semibold text-slate-200">Connect Wallet</span>
                                    <span className="text-xs text-slate-400">MetaMask</span>
                                </div>
                                <svg className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </>
                    )}
                </div>
            </button>
        </Web3Context.Provider>
    );
}