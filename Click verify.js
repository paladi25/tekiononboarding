describe('Click and Text is Displayed',function()
{
   it('Click and verify if Text is getting displayed',function()
   {
       cy.visit("https://testpages.herokuapp.com/")
       cy.get('[id^=clickDisplay-]').click()
       cy.contains('click me').click().should('contain','click');
       
       }
       
    }
 }
