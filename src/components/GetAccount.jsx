import { useState } from 'react'
import { requestAccount } from '../blockchain'

function GetAccount() {
  const [text, setText] = useState('- Result goes here -')
  const [error, setError] = useState()

  const handleClick = async () => {
    const { result, error } = await requestAccount()

    if (result) {
      setText(result)
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
        <p data-testid="result" className="text-green-700 font-bold">
          {text}
        </p>
      )}
    </div>
  )
}

export default GetAccount
