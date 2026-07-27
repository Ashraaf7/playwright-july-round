import { LoginPage } from "./encapsulation";

export class Login {
    private email: string = "";
    private password: string = "";
    private loginButton: string = "";


    typeEmail(email: string): Login {
        this.email = email;
        return this;
    }

    typePassword(password: string): Login {
        if (password.length < 6) {
            console.log('Password must be at least 6 characters long');
            return this;
        }
        this.password = password;
        return this;
    }



    login(email: string, password: string): LoginPage {
        console.log('Typing email:', email);
        console.log('Typing password:', password);
        console.log('Clicking login button');
        return new LoginPage();
    }
}
