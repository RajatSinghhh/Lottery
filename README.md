# 🎰 Decentralized Lottery DApp

A fully decentralized Lottery DApp built using Solidity, Foundry, and React. Users can enter the lottery by paying an entrance fee, and a random winner is selected securely using blockchain-based randomness.

This project demonstrates smart contract development, Web3 wallet integration, decentralized randomness, and frontend interaction with Ethereum smart contracts.

---

# ✨ Features

- 🎟️ Enter Lottery with ETH
- 🔐 Secure Smart Contract
- 🎲 Random Winner Selection
- ⚡ Chainlink VRF Integration
- 🤖 Automated Winner Picking
- 💳 Wallet Connection
- 📱 Responsive Frontend UI
- 🧪 Smart Contract Testing with Foundry
- 🚀 Deployment Scripts Included

---

# 🛠️ Tech Stack

## Blockchain
- Solidity
- Foundry
- Ethereum

## Frontend
- React.js
- Next.js
- Tailwind CSS
- Ethers.js / Viem

## Web3 Tools
- Chainlink VRF
- Chainlink Automation
- OpenZeppelin Contracts
- MetaMask

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/lottery-dapp.git
cd lottery-dapp
```

---

## 2️⃣ Install Dependencies

### Install Foundry Dependencies

```bash
forge install
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

# 🧪 Running Tests

Run Smart Contract Tests:

```bash
forge test
```

Run Verbose Tests:

```bash
forge test -vvvv
```

Check Test Coverage:

```bash
forge coverage
```

---

# 🚀 Deploy Smart Contracts

## Start Local Blockchain

```bash
anvil
```

---

## Deploy Locally

```bash
forge script script/DeployLottery.s.sol \
--rpc-url http://127.0.0.1:8545 \
--private-key your_private_key \
--broadcast
```

---

## Deploy to Testnet/Mainnet

```bash
forge script script/DeployLottery.s.sol \
--rpc-url $RPC_URL \
--private-key $PRIVATE_KEY \
--broadcast \
--verify
```

---

# 💻 Run Frontend

```bash
cd frontend
npm run dev
```

Frontend will start on:

```bash
http://localhost:3000
```

---

# 🎮 How It Works

1. Users connect their wallet
2. Players enter the lottery by paying ETH
3. Lottery contract stores all participants
4. Chainlink VRF generates a secure random number
5. A random winner is selected automatically
6. Winner receives the lottery balance

---

# 🔗 Wallet Support

- MetaMask
- WalletConnect
- Injected Ethereum Wallets

---

# 🌐 Smart Contract Verification

Contracts can be verified on:

- Etherscan
- Sepolia Etherscan
- Arbiscan
- Basescan

---

# 📜 Useful Commands

## Foundry Commands

```bash
forge build
forge test
forge fmt
forge coverage
anvil
```

## Frontend Commands

```bash
npm run dev
npm run build
npm run start
```

---

# 🔒 Security

- Uses Chainlink VRF for secure randomness
- OpenZeppelin smart contract standards
- Fully tested using Foundry
- Follows Solidity best practices

---

# 🤝 Contributing

Contributions are welcome.

## Steps

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push changes

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Developed by **Rajat Singh**


---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
