////Generates key pairs
// let genKeyPairs = web3.eth.accounts.create();
// console.log("KEYS", genKeyPairs);
import infuraKey from "./apiKeys/infuraKey";
import Web3 from "web3";

const genKeys = (coin = "BTC") => {
	//return web3.eth.accounts.create();
	return "genKeys.js";
};

export default genKeys;

// //Specifies which network you want to use ie. testnet mainnet ect...
// const web3 = new Web3(
//   new Web3.providers.HttpProvider(
//     //*** DON'T FORGET to change this to the infura endpoint you created below***//
//     "https://kovan.infura.io/v3/KEY KEY"
//     //*** DON'T FORGET to change this to the infura endpoint you created ***//
//   )
// );
