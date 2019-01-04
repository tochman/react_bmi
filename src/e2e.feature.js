describe('BMI Converter', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000');
    });

    it('should display "BMI Converter" text on page', async () => {
        await expect(page).toMatch('BMI Converter');
    });

    it('calculates metric results', async () => {
        await expect(page).toFill('input[name="weight"]', '95')
        await expect(page).toFill('input[name="height"]', '186')
        await expect(page).toMatch('You are Overweight with a BMI of 27.46')
    })

    it('calculates imperial results', async () => {
        await expect(page).toSelect('select[name="method"]', 'Imperial')
        await expect(page).toFill('input[name="weight"]', '200')
        await expect(page).toFill('input[name="height"]', '73')
        await expect(page).toMatch('You are Overweight with a BMI of 26.38')
    })
});