import LoginPage from '../cucumber/login/LoginPage'
import DashboardPage from '../cucumber/login/DashboardPage';

describe('Work with Classes', () => {
	it('Authorize user', () => {
        LoginPage.openLoginPage();
        LoginPage.login('ivan@gmail.com', 'vlad12-8')
        DashboardPage.validateActiveUserEmail('ivan@gmail.com')
    })
})