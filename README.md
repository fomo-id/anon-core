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
import {BaseCallApi,Global} from 'anon-core'
```

## `BaseCallApi` on web
filename `asyncFetch.ts`
```typescript
class WebCallApiAdapter extends BaseCallApi{
   setHeader() {
     // custom header
     return {}
   }
   showAlert(message: string, status :number, ignore: boolean): void {
     // custom alert
   }
}
// use `Global.baseUrl` for switch server
// use `Global.encodedAuth` for passing token auth

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

## `BaseCallApi` on mobile
filename `asyncFetch.js`
```javascript
import {BaseCallApi, FomoString, Global} from "anon-core"
import * as Application from 'expo-application';
import { Alert } from 'react-native'

class MobileCallApiAdapter extends BaseCallApi{
   setHeader() {
     return {
      'App-Version': Application.nativeApplicationVersion
     }
   }
   showAlert(message, ignore): void {
    if (!ignore) {
      Alert.alert("", message);
    }
   }
}
```

