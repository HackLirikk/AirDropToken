const drop = document.getElementById('drop');

const contractAddressToken = '0x8B0f2b0d5f95633f337cAE5280E0A0E525Bb1f08'
const contractAddress = '0xf29e8f53Bb89Eb0587e6c924Af8FC30c3A5fda14';
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "contract IERC20",
				"name": "_contractAddress",
				"type": "address"
			},
			{
				"internalType": "address[]",
				"name": "_airAddress",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_amount",
				"type": "uint256[]"
			}
		],
		"name": "airdrop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]



const provider = new ethers.providers.Web3Provider(window.ethereum, 97)//ChainID 97 BNBtestnet
let signer;
let contract;


provider.send("eth_requestAccounts", []).then(()=>{
    provider.listAccounts().then( (accounts) => {
        signer = provider.getSigner(accounts[0]); //account in metamask
        
        contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
        )
     
    }
    )
}
)

function airdrop() {
    let toDrop = document.getElementById('toDrop').value;
    let toDropArr = [];
    toDropArr.push(toDrop);
    console.log(toDropArr);
    let value = document.getElementById('value').value;
    let valueArr = [];
    valueArr.push(value);
    console.log(valueArr);
    contract.airdrop(contractAddressToken, toDropArr, valueArr);
}

function main() {
    drop.addEventListener('click', () => airdrop());
}

main();