import {Contract,ethers} from "ethers"
import toast from "react-hot-toast"

export const connectWallet = async() => {
    try{
        let [signer,provider,lotteryContract] = [null,null,null]
        if(!window.ethereum) {
            console.log("Please install metamask")
        }
        const account = await window.ethereum.request({method:"eth_requestAccounts"})

        const selectedAccount = account[0]
        if (!selectedAccount) {
            console.log("Please select an account")
        }
        toast("Account Connected")
        provider = new ethers.BrowserProvider(window.ethereum)
        signer = await provider.getSigner()

        const LotteryContractAddress = import.meta.env.VITE_CONTRACT_ADDRESS
        lotteryContract = new Contract(LotteryContractAddress,import.meta.env.VITE_ABI,signer)
        return {selectedAccount,provider,lotteryContract}
        
    }
    catch (error){
        console.log(error.message)
        toast(error.message,"Error Connecting To Wallet at connectWallet")
    }
}