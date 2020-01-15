/// <reference types="Cypress" />

describe('Markdown blog', () => {
  beforeEach(() => {
    cy.visit(`/`)
  })

  it('is not 404', () => {
    cy.visit('/blog')
    cy.get('#content')
      .find('h1')
      .should('not.have.text', 'NOT FOUND')
    cy.title().should($title => {
      console.log($title)
      if (/404/.test($title)) {
        console.log('You may have updated your h1 on the 404 page. Please update your cypress test accordingly.')
      }
      return expect($title).to.not.contain('404')
    })
  })

  it('is navigatable', () => {
    cy.findAllByText('Blog').click()
    cy.url().should('include', '/blog')
  })

  it('should display list of blog posts', () => {
    cy.get('li')
      .its('length')
      .should('eq', 3)
  })

  it('should display placeholder if no blog posts', () => {
    cy.get('li')
      .its('length')
      .should('eq', 0)
    cy.get('#placeholder')
      .its('length')
      .should('eq', 3)
  })

  it('should be able to navigate to single post', () => {})
})
