import { browser } from '@wdio/globals'

describe('test', () => {
    it('navigate to example.com', async () => {
        await browser.url('https://example.com');
    });
});
