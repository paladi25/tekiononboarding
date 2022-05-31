describe("Value of Douglas",function())
{
         it("If URL page is getting displayed",function())
{
         cy.visit("https://testpages.herokuapp.com/styled/index.html");
         cy.get('#tablestest').click();
         cy.get('tr').eq(5).get('td').should('contain','42');
}
}
         
