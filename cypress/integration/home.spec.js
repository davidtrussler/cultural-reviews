describe('Home page', () => {
  it('Visits the site', () => {
    cy.visit('http://localhost:4000')

    let reviews = cy.get('section ul')
  })
})
