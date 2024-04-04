# how to use `anon-core`

## 1. with `yarn` and `npm`
```
// npm
npm i anon-core

// yarn
yarn add anon-core
```


## how to import
```javascript
import {BaseCallApi} from 'anon-core'
```

## `BaseCallApi` on web
filename `asyncFetch.ts`
```typescript
class WebCallApiAdapter extends BaseCallApi{
   constructor(){
    super(true);
   }
   setHeader() {
     // custom header
     return {}
   }
   showAlert(message: string, ignore: boolean): void {
     // custom alert
   }
   handleReload(onReload) {
    // custom alert for error badConnection
    // return onReload()
  }
}

const webCallApiAdapter = new WebCallApiAdapter()

export async function asyncFetch(subUrl, method, body, onSuccess, onFailure, onUnauthorized, customMessage, ignoreAlert) {
  return await webCallApiAdapter.asyncFetch(subUrl, method, body, onSuccess, onFailure, onUnauthorized, true, customMessage, ignoreAlert);
}
export async function asyncFetchUnauth(subUrl, method, onSuccess, onFailure, customMessage = defaultHttpErrorMessages) {
  return await webCallApiAdapter.asyncFetch(subUrl, method, null, onSuccess, onFailure, null, false, customMessage);
}

export async function asyncFetchUnauthWithBody(subUrl, method, body, onSuccess, onFailure, customMessage = defaultHttpErrorMessages, ignoreAlert) {
  return await webCallApiAdapter.asyncFetch(subUrl, method, body, onSuccess, onFailure, null, false, customMessage, ignoreAlert);
}
```
