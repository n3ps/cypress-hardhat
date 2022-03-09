import { useState } from 'react'

const API_URL = 'http://localhost:3000/api/graphql'

function FetchUser({ input }) {
  const queryId = '2109e710a2f12eac0a7deecb1da46ca3'
  const [data, setData] = useState(null)
  const [error, setError] = useState()

  const handleClick = () => {
    fetch(API_URL, {
      headers: {
        accept: 'application/json',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'x-query-id': queryId,
      },
      body: JSON.stringify({ variables: { input } }),
      method: 'POST',
      mode: 'cors',
    })
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
  }

  console.log(data)

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

      {data && (
        <div>
          <p className="text-green-700 font-bold">
            Id:&nbsp;
            <span data-testid="result">
              {data.data.findOrCreateUser.user.id}
            </span>
          </p>
          <p className="text-green-700 font-bold">
            Username:&nbsp;
            <span data-testid="result">
              {data.data.findOrCreateUser.user.profile.username}
            </span>
          </p>
        </div>
      )}
    </div>
  )
}

export default FetchUser
