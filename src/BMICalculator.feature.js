describe('BMI Converter', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000');
    });

    it('should display "BMI Converter" text on page', async () => {
        await expect(page).toMatch('BMI Converter');
    });

    it('calculates metric results', async () => {
        await page.select('select[id="method"]', 'metric')
        await page.type('input[name="weight"]', '95')
        await page.type('input[name="height"]', '186')
        await expect(page).toMatch('You are Overweight with a BMI of 27.46')
    })

    it('calculates imperial results', async () => {
        await page.select('select#method', 'imperial')
        // await page.waitFor(1000);
        await page.type('input[name="weight"]', '200')
        await page.type('input[name="height"]', '73')
        await expect(page).toMatch('You are Overweight with a BMI of 26.38')
    })
});