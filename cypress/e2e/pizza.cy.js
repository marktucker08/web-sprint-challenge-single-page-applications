describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('test filling out and submitting form', () => {
    beforeEach(() => {

      cy.visit("http://localhost:3000/pizza"); 
    })

  const nameInput = () => cy.get("input[name=name]");
  const pepperoniSelect = () => cy.get('input[name=pepperoni]') 
  const mushroomSelect = () => cy.get('input[name=mushrooms]') 
  const steakSelect = () => cy.get('input[name=steak]')
  const pineappleSelect = () => cy.get('input[name=pineapple]')  
  const sizeSelect = () => cy.get('select[name=size]')
  const specialInput = () => cy.get('input[name=special]')
  const submitBtn = () => cy.get(`button[id="order-button"]`)

  it('test filling out name input', () => {
    nameInput()
      .should('have.value', '')
      .type('Marcus')
      .should('have.value', 'Marcus');
  })

  it('test selecting multiple toppings', () => {
    pepperoniSelect()
      .should('not.be.checked')
      .check()
      .should('be.checked')
    pineappleSelect()
      .should('not.be.checked')
      .check()
      .should('be.checked')
    steakSelect()
      .should('not.be.checked')
      .check()
      .should('be.checked')
    mushroomSelect()
      .should('not.be.checked')
      .check()
      .should('be.checked')
  })

  it('submitting the form', () => {
    nameInput()
      .type('Mike')
      .should('have.value', 'Mike')
    sizeSelect()
      .select(1)
    pineappleSelect()
      .check()
    steakSelect()
      .check()
    specialInput()
      .type('gluten free crust')
      .should('have.value', 'gluten free crust')
    submitBtn().click();

  })



})