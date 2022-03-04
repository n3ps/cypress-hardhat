import { providers } from 'ethers'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

const LOCAL_NETWORK = 'http://localhost:8545'

export const provider = new providers.JsonRpcProvider(LOCAL_NETWORK)

Cypress.Commands.add('login', () => {
  cy.on('window:before:load', async (win) => {
    provider.request = ({ method, params }) => {
      // Override
      if (method === 'eth_requestAccounts') {
        method = 'eth_accounts'
      }

      return provider.send(method, params)
    }

    win.ethereum = provider
  })
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
