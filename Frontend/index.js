import { ethers } from "./ethers-5.6.esm.min.js";
import { contractAddress, abi } from "./constant.js";

const connectButton = document.getElementById("ConnectButton");
const enterLotteryButton = document.getElementById("EnterLotteryButton");
const lotteryBalanceButton = document.getElementById("LotteryBalanceButton");
const participantsButton = document.getElementById("ParticipantsButton");
const lotteryWinnerButton = document.getElementById("LotteryWinner");

connectButton.onclick = connect;
enterLotteryButton.onclick = enterLottery;
lotteryBalanceButton.onclick = lotteryBalance;
participantsButton.onclick = participants;
lotteryWinnerButton.onclick = lotteryWinner;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    connectButton.innerHTML = "Connected";
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  } else {
    connectButton.innerHTML = "Please install MetaMask";
  }
}

async function enterLottery() {
  const ether = document.getElementById("enterlottery").value;
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.enterLottery({
        value: ethers.utils.parseEther(ether),
      });

      console.log(`You enter lottery with ${ether} ether `);
    } catch (error) {
      console.log(error);
    }
  } else {
    fundButton.innerHTML = "Please install MetaMask";
  }
}
async function lotteryBalance() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.lotteryBalance();

      console.log(`Lottery Balance is ${transactionResponse}`);
    } catch (error) {
      console.log(error);
    }
  } else {
    fundButton.innerHTML = "Please install MetaMask";
  }
}
async function participants() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.participants();

      console.log(`Total participants are ${transactionResponse}`);
    } catch (error) {
      console.log(error);
    }
  } else {
    fundButton.innerHTML = "Please install MetaMask";
  }
}
async function lotteryWinner() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.lotteryWinner();

      console.log(`Lottery winner is  ${transactionResponse}`);
    } catch (error) {
      console.log(error);
    }
  } else {
    fundButton.innerHTML = "Please install MetaMask";
  }
}
