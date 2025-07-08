export const config: WebdriverIO.Config = {

    capabilities: [{
        browserName: 'chrome',
        "goog:chromeOptions": {
            "debuggerAddress": "localhost:9222"
        }
    }],
    specs: [
        './test/specs/**/*.ts'
    ],
}
