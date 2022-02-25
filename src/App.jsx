import GetAccount from './components/GetAccount'
import FetchUser from './components/FetchUser'
import CallContract from './components/CallContract'

function App() {
  return (
    <div className="p-4 space-y-8">
      <h1 className="font-bold text-xl">Cypress + Hardhat Prototype</h1>

      <p>Step 1: Get web3 account</p>

      <GetAccount />

      <p>Step 2: Programatically fetch user</p>

      <FetchUser />

      <p>Step 3: Call web3 contract</p>

      <CallContract />
    </div>
  )
}

export default App
