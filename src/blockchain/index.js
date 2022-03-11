import { ethers } from 'ethers'

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

export async function signMessage(message) {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()

  return await signer.signMessage(message)
}
