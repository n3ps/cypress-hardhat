import { requestAccount, requestBalance } from '../blockchain'

import { useState } from 'react'

function GetAccount() {
  const [text, setText] = useState('')
  const [error, setError] = useState()
  const [balance, setBalance] = useState('')

  const handleClick = async () => {
    const { result, error } = await requestAccount()

    const balanceResult = await requestBalance()

    if (result) {
      setText(result)
      setBalance(balanceResult.balance)
      setError('')
    } else if (error) {
      setText('')
      setError(error)
    }
  }

  return (
    <div className="flex gap-4">
      <button
        data-testid="btn"
        className="btn btn-primary"
        onClick={handleClick}
      >
        Request account
      </button>

      {error && (
        <p data-testid="error" className="text-red-500 font-bold">
          {error}
        </p>
      )}

      {text && (
        <div>
          <p className="text-green-700 font-bold">
            Address: <span data-testid="result">{text}</span>
          </p>
          <p className="text-green-700 font-bold">Balance: {balance}</p>
        </div>
      )}
    </div>
  )
}

export default GetAccount
