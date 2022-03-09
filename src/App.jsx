import GetAccount from './components/GetAccount'
import FetchUser from './components/FetchUser'
import CallContract from './components/CallContract'

function App() {
  return (
    <div className="p-4 space-y-8">
      <h1 className="font-bold text-xl">Cypress + Hardhat Prototype</h1>

      <p>Step 1: Get web3 account</p>

      <GetAccount />

      <p>Step 2: Programmatically fetch user</p>

      <FetchUser
        input={{
          address: '0x5c728354230f7db92350b7616f45791dfe286279',
          message:
            'Hi from Coinbase NFT. Sign this message to prove you have access to this wallet and we’ll log you in. This won’t cost you any Ether. Timestamp: 1646842820',
          signature:
            '0x6771e3542032f9f4a3d179edf902abd4db9d1333d0e28af8ab0198f6c17dffc371922844a6a6a6945bb0137093fb0faf6aafc75be8b0ea0d38338607f95dbf351b',
        }}
      />

      <p>Step 3: Call web3 contract</p>

      <CallContract />
    </div>
  )
}

export default App
