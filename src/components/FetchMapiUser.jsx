import { useState } from 'react'
import { findOrCreateUser, getMessageToSign } from '../mapi'
import { signMessage } from '../blockchain'

function FetchUser({ address }) {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState()

  const handleClick = async () => {
    try {
      if (!address) {
        throw new Error('Missing account')
      }

      const message = await getMessageToSign()
      const signature = await signMessage(message)
      await findOrCreateUser({ address, message, signature }).then(setUserData)
      setError()
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className="flex gap-4">
      <button
        data-testid="btn"
        className="btn btn-primary"
        onClick={handleClick}
      >
        Get Mapi User
      </button>

      {error && (
        <p data-testid="error" className="text-red-500 font-bold">
          {error}
        </p>
      )}

      {userData && (
        <div>
          <p className="text-green-700 font-bold">
            Id:&nbsp;
            <span data-testid="result">{userData.user.id}</span>
          </p>
          <p className="text-green-700 font-bold">
            Username:&nbsp;
            <span data-testid="result">{userData.user.profile.username}</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default FetchUser
