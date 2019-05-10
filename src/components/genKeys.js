////Generates key pairs
// let genKeyPairs = web3.eth.accounts.create();
// console.log("KEYS", genKeyPairs);
import infuraKey from "./apiKeys/infuraKey";
import Web3 from "web3";

const genKeys = endpoint => {
	//return web3.eth.accounts.create();
	return endpoint.eth.accounts.create();
};

export default genKeys;
