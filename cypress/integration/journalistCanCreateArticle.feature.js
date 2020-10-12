describe('Journalist can create article', () => {
  beforeEach(() => {
    cy.login()
  })

  context('successfully', () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/articles*",
        response: "fixture:article_create_success.json"
      })
    })

    it('with title and content', () => {
      cy.get("[data-cy='article-form']").within(() => {
        cy.get("[data-cy='title']").type("Article title")
        cy.get("[data-cy='content']").type("Article content")
        cy.get("[data-cy='submit']").click()
      })
      cy.get("[data-cy='message']").should("contain", "Article successfully created!")
    });
  })
})
