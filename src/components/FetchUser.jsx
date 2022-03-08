import { requestCBWalletUser } from '../blockchain'
import { useState } from 'react'

function FetchUser() {
  const [user, setUser] = useState('')
  const [error, setError] = useState()

  const handleClick = async () => {
    const { user, error } = await requestCBWalletUser()

    if (user) {
      setUser(user)
      setError('')
    } else if (error) {
      setUser('')
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
        Get User
      </button>

      {error && (
        <p data-testid="error" className="text-red-500 font-bold">
          {error}
        </p>
      )}

      {user && (
        <div>
          <p className="text-green-700 font-bold">User: {user}</p>
        </div>
      )}
    </div>
  )
}

export default FetchUser
