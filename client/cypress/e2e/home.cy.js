describe('home page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000/surveyapp/')

  })
  // it('the h1 containt the correct text.', () => {
  //   cy.get("h1").should("exist").contains("Developer survey")
  //
  // })
  //
  // it('form does contain 16 options', () => {
  //   cy.get('.formkit-wrapper > .formkit-label').eq(15).should("exist")
  //
  // })
  //
  //
  // it("ugly data attribute test", ()=> {
  //   cy.getByDataFamily('text').should("exist")
  // })
  //
  // context("form section", () => {
  //   it("fill form and submit form", () => {
  //     cy.get('#Options > .formkit-options').find('.formkit-wrapper > .formkit-inner > .formkit-decorator').eq(1).click()
  //     cy.get('#Options > .formkit-options').find('.formkit-wrapper > .formkit-inner > .formkit-decorator').eq(2).click()
  //     cy.get('#Options > .formkit-options').find('.formkit-wrapper > .formkit-inner > .formkit-decorator').eq(3).click()
  //     cy.get('#input_1').click()
  //
  //     cy.get('#input_2').select(3)
  //     cy.get('#input_3').select(2)
  //     cy.get('#input_4').type("https://github.com/philfreshman")
  //     cy.get('#input_5').type("testing with cypress :)")
  //     cy.get('#input_7').click()
  //
  //
  //     cy.get('#TermsOfUse > .formkit-options > .formkit-option > .formkit-wrapper > .formkit-inner > .formkit-decorator').click()
  //     cy.get('#input_9').click()
  //   })
  // })

  context('login', () => {
    it("opens login page", () => {
      cy.scrollTo("bottom")

      cy.get('.more-button').click()
      cy.get('.more-button-list > :nth-child(2)').click()
      cy.location('pathname').should("eq", "/surveyapp/login")
    })
  })
})