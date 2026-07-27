import { Login } from "./Login";

let LoginPage = new Login();
LoginPage.typeEmail('ahmed@test.com');
LoginPage.typePassword('12345');
LoginPage.login('ahmed@test.com', '123456');