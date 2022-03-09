import { requestContractResults } from '../blockchain'
import { useState } from 'react'

function CallContract() {
  const [contractResults, setContractResults] = useState('')
  const [error, setError] = useState()

  const handleClick = async () => {
    const { contractResults, error } = await requestContractResults()

    if (contractResults) {
      setContractResults(contractResults)
      setError('')
    } else if (error) {
      setContractResults('')
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
        Call Contract
      </button>

      {error && (
        <p data-testid="error" className="text-red-500 font-bold">
          {error}
        </p>
      )}

      {contractResults && (
        <div>
          <p className="text-green-700 font-bold">
            Contract Results: {contractResults}
          </p>
        </div>
      )}
    </div>
  )
}

export default CallContract
