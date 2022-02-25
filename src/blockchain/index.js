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
