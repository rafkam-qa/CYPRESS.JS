describe('Покупка аватара', function () {

   it('Покупка аватара', function () {
        cy.visit('https://pokemonbattle.ru/login'); // зайти на сайт
        cy.get('#k_email').type('YOUR_EMAIL');
        cy.get('#k_password').type('YOUR_PASSWORD');
        cy.get('.MuiButton-root').click();
        cy.wait(1800);
        cy.get('.header_card_trainer').click();
        cy.wait(1800);
        cy.get('.k_mobile > :nth-child(5)').click();
        cy.get('.available > button').first().click();
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996');
        cy.get(':nth-child(1) > .style_1_base_input').type('12/26');
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('IVANOV IVAN');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.threeds_number').type('56456'); 
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
    })
    })
