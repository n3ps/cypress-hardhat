import CallContract from './components/CallContract'
import DeployContract from './components/DeployContract'
import FetchUser from './components/Fetchuser'
import GetAccount from './components/GetAccount'
import GetTokenOwner from './components/GetTokenOwner'

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

      <p>Step 4: Assign first token</p>

      <CallContract />

      <p>Step 5: Get address of token owner</p>

      <GetTokenOwner />
    </div>
  )
}

export default App
