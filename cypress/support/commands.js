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
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("backgroundLogin", () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0uz8F5xWXBg2o7bvHDSG%2BsrC3dHufv4vdypgjUyJhdEQxyJPSOIOlwFiZHXRiizV6PGEaiZpThg3UKQP6w%2BbsvWLxOFyAu7MFYj1wwqYQdqM3zT8xYzqdcfp%2Bbjbc%2BmwWUW4%2FfrI%2FQFmgV%2BWmbSAUxz%2FqQCl8psVN4fyIHATGM0mmxxmwiM1TOz3AlmOa%2BwQ0t7eORElIpNRcWI9rB0v0%2BQulxhx7QO4QC9YvHuLwibix4rZ3D%2Bcoo0xEoyhF2LRfzkmgndNuEU0PBDY7k3ynH7YatvJLuocMhqlyMZAmOGJuQa0MmKPNiU4RrVEXnlqwBWhIPf3xryA%2B6aNmnzwZuA2HimlB2YSBBrpwC5GB8ASerAwRZyEtOEkIRPUbQN8G2vMiT87i6FZb6liFeswrsE%3D000309'
    )
})