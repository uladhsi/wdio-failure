# WDIO Error Reproducible Sample

## Steps to reproduce

1. Run `npm install`
2. Run `npm run wdio`

<b>Actual behavior</b>: Error message is displayed: "@wdio/runner: Error: WebDriverError: invalid argument: cannot parse capability: goog:chromeOptions
from invalid argument: unrecognized chrome option: prefs"

<b>Expected behavior</b>: For this particular minimal sample, if nothing runs on the debuggerAddress, the test should start running and not fail immediately with the error above, but rather start executing and fail some time later due to timeout