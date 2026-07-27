class LoginPage {
    private email: string = "";
    private password: string = "";
    private loginButton: string = "";


    typeEmail(email: string): void {
        this.email = email;
    }

    typePassword(password: string): void {
        if (password.length < 6) {
            console.log('Password must be at least 6 characters long');
            return;
        }
        this.password = password;
    }



    login(email: string, password: string): void {
        console.log('Typing email:', email);
        console.log('Typing password:', password);
        console.log('Clicking login button');
    }
}


//Test cases 

let loginPage = new LoginPage();

loginPage.typeEmail('ahmed@test.com');
loginPage.typePassword('12345');
loginPage.login('ahmed@test.com', '123456');