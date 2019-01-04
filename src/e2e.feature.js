describe('Google', () => {
    beforeAll(async () => {
        await page.goto('https://craftacademy.co');
    });

    it('should display "google" text on page', async () => {
        await expect(page).toMatch('Craft Academy');
    });
});