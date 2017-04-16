describe('E2E: register test', function () {

    beforeEach(function () {
        browser.get('http://localhost:8080/#/register');
        browser.driver.sleep(5000);
    });

    it('should display register succesfull', function () {

        element(by.id('firstName')).sendKeys('Test');
        element(by.id('email')).sendKeys('test@test.com');
        element(by.id('password')).sendKeys('testpass');
        element(by.id('bankaccount')).sendKeys('12345');
        
        element(by.id('registerSubmit')).click();

        browser.driver.sleep(1000);

        var spanText = element(by.id('registerSpan')).getText();

        expect(spanText).toBe("Registreren is gelukt!");
    });

    it('should login display and display welcome', function () {

        element(by.id('loginEmail')).sendKeys('test@test.com');
        element(by.id('loginPassword')).sendKeys('testpass');
        
        element(by.id('loginBtn')).click();

        browser.driver.sleep(2000);

        var spanText = element(by.id('welcomeSpan')).getText();

        expect(spanText).toBe("Welkom: Test");
    });
});