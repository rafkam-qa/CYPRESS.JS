describe('Проверка авторизации', function () {

   it('Позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio'); // зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввести почту в поле "почта"
        cy.get('#pass').type('iLoveqastudio1'); // ввести пароль в поле "пароль"
        cy.get('#loginButton').click(); // найти и кликнуть на кнопку войти
        cy.get('#messageHeader').should('be.visible'); //проверяю, что после авт. есть текст
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // видно текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видно крестик
    })

    it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio'); // зайти на сайт
        cy.get('#forgotEmailButton').click(); // нажать забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввести почту
        cy.get('#restoreEmailButton').click();//кликнуть отправить код
        cy.get('#messageHeader').should('be.visible'); // видно окно пользователю
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //текст отрисовался
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видно крестик
    })

    it('Негативный тест авторизации(неправильный пароль)', function () {
        cy.visit('https://login.qa.studio'); // зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввести почту в поле "почта"
        cy.get('#pass').type('iLoveqastudio2'); // ввести НЕПРАВИЛЬНЫЙ пароль в поле "пароль"
        cy.get('#loginButton').click(); // найти и кликнуть на кнопку войти
        cy.get('#messageHeader').should('be.visible'); //проверяю, что после авт. есть текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // видно текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видно крестик
    })

    it('Негативный тест авторизации(неправильный логин)', function () {
        cy.visit('https://login.qa.studio'); // зайти на сайт
        cy.get('#mail').type('germania@dolnikov.ru'); // ввести НЕПРАВИЛЬНУЮ почту в поле "почта"
        cy.get('#pass').type('iLoveqastudio1'); // ввести пароль в поле "пароль"
        cy.get('#loginButton').click(); // найти и кликнуть на кнопку войти
        cy.get('#messageHeader').should('be.visible'); //проверяю, что после авт. есть текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // видно текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видно крестик
    })

    it('Негативный тест авторизации(проверка валидации)', function () {
        cy.visit('https://login.qa.studio'); // зайти на сайт
        cy.get('#mail').type('germandolnikov.ru'); // ввести почту без @ в поле "почта"
        cy.get('#pass').type('iLoveqastudio1'); // ввести пароль в поле "пароль"
        cy.get('#loginButton').click(); // найти и кликнуть на кнопку войти
        cy.get('#messageHeader').should('be.visible'); //проверяю, что после авт. есть текст
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // видно текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видно крестик
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio'); // зайти на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввести почту в поле "почта"
        cy.get('#pass').type('iLoveqastudio1'); // ввести пароль в поле "пароль"
        cy.get('#loginButton').click(); // найти и кликнуть на кнопку войти
        cy.get('#messageHeader').should('be.visible'); //проверяю, что после авт. есть текст
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // видно текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видно крестик
    })
})