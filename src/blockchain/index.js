import { ethers } from 'ethers'
import { bytecode, abi } from './contractInterface'

export async function requestAccount() {
  if (!window.ethereum) {
    return {
      error: 'No provider detected',
    }
  }

  try {
    const result = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })

    return {
      result: result[0],
    }
  } catch (e) {
    return {
      error: e.message,
    }
  }
}

export async function requestBalance() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  const { result } = await requestAccount()

  const balance = await provider.getBalance(result)

  return { balance: ethers.utils.formatEther(balance) }
}

export async function requestCBWalletUser() {
  const walletName = localStorage.getItem(
    '-walletlink:https://www.walletlink.org:walletUsername'
  )
  return { user: walletName }
}

// CyberPunks contract... https://etherscan.io/hardhatChainAccount0ess/0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB#code
const mainnetPunkContractAddress = '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB'
const hardhatUri = 'http://127.0.0.1:8545/'
const hardhatChainAccount0 = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
let deployedContract = null

const forkNumber = 11095000

function getConnectedContract() {
  const provider = new ethers.providers.JsonRpcProvider(hardhatUri)
  const signer = provider.getSigner(hardhatChainAccount0)
  const connectedContract = deployedContract.connect(signer)
  return connectedContract
}

export async function requestDeployContract() {
  const provider = new ethers.providers.JsonRpcProvider(hardhatUri)
  const signer = provider.getSigner(hardhatChainAccount0)
  const factory = new ethers.ContractFactory(abi, bytecode, signer)
  deployedContract = await factory.deploy()

  try {
    const receipt = await deployedContract.deployTransaction.wait()
    return { contractResults: JSON.stringify(receipt) }
  } catch (e) {
    return { contractResults: JSON.stringify(e) }
  }
}

async function requestContractResultsMainnet() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const contract = new ethers.Contract(hardhatChainAccount0, abi, provider)
  const result = await contract.punksOfferedForSale(1234)
  const blockNumber = await provider.getBlockNumber()
  return { contractResults: JSON.stringify(result) }
}

async function requestContractResultsHardhat() {
  const connectedContract = getConnectedContract()

  const result = await connectedContract.setInitialOwner(
    hardhatChainAccount0,
    0
  )
  return { contractResults: JSON.stringify(result) }
}

export async function getOwnerOfToken(tokenIndex) {
  const connectedContract = getConnectedContract()

  const result = await connectedContract.punkIndexToAddress(tokenIndex)
  return { contractResults: JSON.stringify(result) }
}

export async function requestContractResults() {
  return requestContractResultsHardhat()
}
