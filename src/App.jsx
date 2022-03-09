import CallContract from './components/CallContract'
import DeployContract from './components/DeployContract'
import FetchUser from './components/Fetchuser'
import GetAccount from './components/GetAccount'

function App() {
  return (
    <div className="p-4 space-y-8">
      <h1 className="font-bold text-xl">Cypress + Hardhat Prototype</h1>

      <p>Step 1: Get web3 account</p>

      <GetAccount />

      <p>Step 2: Programatically fetch user</p>

      <FetchUser />

      <p>Step 3: Deploy web3 contract</p>

      <DeployContract />

      <p>Step 4: Call web3 contract</p>

      <CallContract />
    </div>
  )
}

export default App
