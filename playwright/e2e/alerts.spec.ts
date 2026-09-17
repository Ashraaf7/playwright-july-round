import { Dialog, test } from '@playwright/test';


test('Simple Alert TC', async ({ page }) => {
    //event listener for dialog events
    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/dialogs/alerts.html');
    await page.getByRole('button', { name: 'Simple Alert' }).click();
    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
    });
    await page.getByRole('button', { name: 'Confirm Dialog' }).click();
});


test('accept/cancel Alert TC', async ({ page }) => {
    //event listener for dialog events
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
    });
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/dialogs/alerts.html');
    await page.getByRole('button', { name: 'Confirm Dialog' }).click();
});

test('Prompt Alert TC', async ({ page }) => {
    //event listener for dialog events
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept('Test input');
    });
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/dialogs/alerts.html');
    await page.getByRole('button', { name: 'Trigger Prompt' }).click();
});

test('General Alert TC', async ({ page }) => {
    //event listener for dialog events
    const dialogListener = async (dialog: Dialog) => {
        if (dialog.type() === 'alert') {
            console.log(await dialog.message());
            await dialog.accept();
        }
        else if (dialog.type() === 'confirm') {
            console.log(await dialog.message());
            await dialog.dismiss();
        }
        else if (dialog.type() === 'prompt') {
            console.log(await dialog.message());
            await dialog.accept('Test input');
        }
        else if (dialog.type() === 'beforeunload') {
            console.log(await dialog.message());
            await dialog.accept();
        }
    };

    page.on('dialog', dialogListener);
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/dialogs/alerts.html');
    await page.getByRole('button', { name: 'Simple Alert' }).click();
    await page.getByRole('button', { name: 'Confirm Dialog' }).click();
    await page.getByRole('button', { name: 'Trigger Prompt' }).click();
    page.off('dialog', dialogListener); //remove the dialog event listener, after all dialogs have been auto dismissed or accepted
});


async function handleDialog(dialog: Dialog) {
    console.log(await dialog.message());
    await dialog.accept();
}

export { handleDialog };