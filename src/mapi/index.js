const API_URL = 'http://localhost:3000/api/graphql'

function fetchAPI({ queryId, body }) {
  return fetch(API_URL, {
    headers: {
      accept: 'application/json',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      'x-query-id': queryId,
    },
    body,
    method: 'POST',
    mode: 'cors',
  }).then((res) => {
    if (!res.ok || res.status !== 200) {
      throw new Error(res.statusText)
    }
    return res.json()
  })
}

export async function findOrCreateUser(input) {
  const queryId = '2109e710a2f12eac0a7deecb1da46ca3'
  const payload = await fetchAPI({
    queryId,
    body: JSON.stringify({ variables: { input } }),
  })
  return payload.data.findOrCreateUser
}

export async function getMessageToSign() {
  const queryId = 'efb7c0079afe2e48bf02c6e9957d04f8'
  const payload = await fetchAPI({
    queryId,
    body: JSON.stringify({ variables: {} }),
  })
  return payload.data.messageToSign
}
