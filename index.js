const ethers = require("ethers")
const abi = require("./abi")
const url = "https://arb-mainnet.g.alchemy.com/v2/Obf4edngpLY8QafVD4QcOS6oGlwayuRd"
const wss = "wss://eth-mainnet.g.alchemy.com/v2/eBeyrAsl86pTDZpU7LQO36277iA_Piox"
const contract = "0x67a24CE4321aB3aF51c2D0a4801c3E111D88C9d9"

const aimBlock = 16890400


//METTETE LA VOSTRA CHIAVE QUI DENTRO
const key = "CHIAVE QUI"


const provider = new ethers.JsonRpcProvider(url)
const wssProvider = new ethers.WebSocketProvider(wss); 
const wallet = new ethers.Wallet(key, provider)



const c = new ethers.Contract(contract, abi, wallet);

wssProvider.on("block", function(block){
    if(block => aimBlock){
        c.claim().then((tx) =>{
            tx.wait().then((res)=>{
                console.log("claim successful!")
            }).catch((err)=>{
                console.log("something failed. retry using npm run dev")
            })
        }).catch((err)=>{"SI MA PORCO DIO EH "})
    }
})