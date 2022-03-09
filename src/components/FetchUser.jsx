import { useState } from 'react'
import { findOrCreateUser, getMessageToSign } from '../mapi'

function FetchUser({ input }) {
  const [message, setMessage] = useState(null)
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState()

  const handleClick = async () => {
    try {
      await getMessageToSign().then(setMessage)
      await findOrCreateUser(input).then(setUserData)
    } catch (e) {
      setError(e)
    }
  }

  return (
    <div className="flex gap-4">
      <button className="btn btn-primary" onClick={handleClick}>
        Fetch user
      </button>

      {error && (
        <p data-testid="error" className="text-red-500 font-bold">
          {error}
        </p>
      )}

      {userData && message && (
        <div>
          <p className="text-green-700 font-bold">
            Message:&nbsp;
            <span data-testid="result">{message}</span>
          </p>
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
