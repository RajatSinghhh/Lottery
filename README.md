# Lottery DApp

A decentralised lottery application built on Ethereum. Players enter by paying ETH, and a winner is picked automatically — fully transparent and trustless on-chain.

## Features

- **Enter the Lottery** – Players join by sending ETH to the smart contract
- **Automatic Winner Selection** – Winner is picked programmatically with no manual intervention
- **Owner Controls** – The contract owner can start and end lottery rounds
- **Instant Payout** – Prize pool is sent directly to the winner's wallet upon draw

## Tech Stack

- **Solidity** – Smart contract logic
- **Foundry** – Contract testing and deployment
- **React.js** – Frontend interface
- **Ethers.js** – Blockchain interaction from the frontend

## Getting Started

### Prerequisites

- Node.js installed
- Foundry installed — [getfoundry.sh](https://getfoundry.sh)
- MetaMask or any Ethereum wallet browser extension

### Clone the Repo

```bash
git clone https://github.com/RajatSinghhh/Lottery
cd Lottery
```

### Smart Contract Setup

```bash
# Install Foundry dependencies
forge install

# Run tests
forge test

# Deploy to a local network
forge script script/Deploy.s.sol --rpc-url http://localhost:8545 --broadcast
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The app will start at `http://localhost:3000`.

### Configuration

Create a `.env` file in the frontend directory:

```env
REACT_APP_CONTRACT_ADDRESS=your_deployed_contract_address
REACT_APP_RPC_URL=your_rpc_url
```

## How It Works

1. Owner starts a new lottery round
2. Players call `enter()` by sending the required ETH amount
3. Owner ends the round and triggers winner selection
4. The smart contract picks a winner and transfers the full prize pool to their address

## Live Demo

[https://auditdrop.com/Projects/lottery/](https://auditdrop.com/Projects/lottery/)

## Author

**Rajat Singh** – [GitHub](https://github.com/RajatSinghhh) · [Portfolio](https://auditdrop.com)
