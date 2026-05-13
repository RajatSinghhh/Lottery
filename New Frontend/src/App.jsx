import './App.css'
import { Toaster } from "react-hot-toast"
import { Wallet } from './utils/Wallet'
import { EnterLottery } from './component/EnterLottery'
import { LotteryBalance } from './component/LotteryBalance'
import { LotteryWinner } from './component/LotteryWinner'
import { Participants } from './component/participants'

function App() {  
  return (
    // THIS DIV HAS RELATIVE - Button will position relative to this
    <div className="min-h-screen relative">
      
      {/* Animated background shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Wallet wraps everything - button is INSIDE Wallet component */}
      <Wallet>
        {/* Main content */}
        <div className="relative z-10">
          {/* Hero Header */}
          <header className="pt-20 pb-8 px-4 animate-fade-in">
            <div className="max-w-4xl mx-auto text-center">
              {/* Logo/Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 mb-6 animate-bounce-in">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text animate-fade-in-up">
                Decentralized Lottery
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Enter the blockchain-powered lottery. Transparent, secure, and fair for everyone.
              </p>

              {/* Stats bar */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="glass px-6 py-3 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="status-dot status-active"></span>
                    <span className="text-sm text-slate-400">Live on Blockchain</span>
                  </div>
                </div>
                <div className="glass px-6 py-3 rounded-xl">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-400">Verified Smart Contract</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Divider */}
          <div className="max-w-6xl mx-auto px-4 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
          </div>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-stagger">
              {/* Enter Lottery - Featured */}
              <div className="lg:col-span-2">
                <EnterLottery />
              </div>

              {/* Lottery Balance */}
              <div className="hover-lift">
                <LotteryBalance />
              </div>

              {/* Lottery Winner */}
              <div className="hover-lift">
                <LotteryWinner />
              </div>

              {/* Participants - Full width */}
              <div className="lg:col-span-2 hover-lift">
                <Participants />
              </div>
            </div>

            {/* Footer Info */}
            <div className="mt-12 text-center animate-fade-in">
              <div className="glass inline-block px-8 py-4 rounded-2xl">
                <p className="text-sm text-slate-400 mb-2">
                  🔒 Powered by Ethereum Smart Contracts
                </p>
                <p className="text-xs text-slate-500">
                  All transactions are transparent and immutable on the blockchain
                </p>
              </div>
            </div>
          </main>
        </div>
      </Wallet>

      {/* Toast notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(30, 41, 59, 0.95)',
            backdropFilter: 'blur(12px)',
            color: '#f1f5f9',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: '12px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
          },
        }}
      />
    </div>
  )
}

export default App