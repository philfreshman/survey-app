describe("User login", () => {
    it("User should be able to see results after login", () => {
        cy.visit('http://localhost:8000/surveyapp/login')

        cy.get('#input_0').type("admin")
        cy.get('#input_1').type("pass")
        cy.get('#input_2').click()

        cy.location("pathname").should("eq", "/surveyapp/results")
        cy.get('canvas').should("exist")
    })
})