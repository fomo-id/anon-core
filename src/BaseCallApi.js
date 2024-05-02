import Global from './constants/Global'
import HttpErrorMessages from './HttpErrorMessages'
import FomoString from './constants/FomoString'

class BaseCallApi {
  constructor(devMode) {
    this.baseUrl = devMode ? Global.baseUrlStage : Global.baseUrl;
    this.defaultHttpErrorMessages = new HttpErrorMessages()
  }

  async asyncFetch(subUrl, method, body, onSuccess, onFailure, onUnauthorized, auth, customMessage = this.defaultHttpErrorMessages, ignoreAlert) {
    const AbortController = window.AbortController;
    const controller = new AbortController();
    const signal = controller.signal;
    const timeoutId = setTimeout(() => { controller.abort(); }, 30000);
    const contentType = body instanceof FormData ? "multipart/form-data;" : 'application/json';
    let properties = {
      method: method,
      signal: signal,
      headers: new Headers({
        'Content-Type': contentType,
        ...this.setHeader()
      })
    }

    if (body) {
      properties.body = body;
    }

    if (auth) {
      properties.headers.append('Authorization', 'Basic ' + Global.encodedAuth)
    }

    const fullUrl = this.baseUrl + subUrl
    console.log('Executing ' + fullUrl)
    let response;
    try {
      response = await fetch(fullUrl, properties);
      clearTimeout(timeoutId);
    } catch (error) {
      const errorLog = 'Request timeout on ' + fullUrl + ` [err=${error}]`
      console.log(errorLog);
      // to debug which URL is erroring out
      const alertBody = Global.user.inner?.id && Global.admin?.id && Global.user.inner?.id === Global.admin?.id
        ? errorLog
        : FomoString.badConnection;
      this.handleReload(() => {
        return asyncFetch(subUrl, method, body, onSuccess, onFailure, onUnauthorized, auth, customMessage)
      }, alertBody, onFailure)
      return;
    }
    if (response.status >= 200 && response.status < 300) {
      if (onSuccess) await onSuccess(response);
    } else if (response.status === 401) {
      this.showAlert(customMessage.status401, response.status, ignoreAlert);
      if (onUnauthorized) onUnauthorized();
    } else if (response.status === 400) {
      this.showAlert(customMessage.status400, response.status, ignoreAlert);
      if (onFailure) onFailure({
        status: response.status,
        message: customMessage.status400
      });
    } else if (response.status === 404) {
      this.showAlert(customMessage.status404, response.status, ignoreAlert);//TODO: customize this
      if (onFailure) onFailure({
        status: response.status,
        message: customMessage.status404
      });
    } else if (response.status === 403) {
      this.showAlert(customMessage.status403, response.status, ignoreAlert);
      if (onFailure) onFailure({
        status: response.status,
        message: customMessage.status403
      });
    } else if (response.status === 409) {
      if (onFailure) onFailure({
        status: response.status,
        message: customMessage.status409
      });
      this.showAlert(customMessage.status409, response.status, ignoreAlert);
    } else if (response.status === 413) {
      if (onFailure) onFailure({
        status: response.status,
        message: customMessage.status413
      });
      this.showAlert(customMessage.status413, response.status, ignoreAlert);
    } else if (response.status === 422) {
      if (onFailure) onFailure({
        status: response.status,
        message: customMessage.status422
      });
      this.showAlert(customMessage.status422, response.status, ignoreAlert);
    } else {
      this.showAlert(FomoString.unknownErrorMessage, response.status, ignoreAlert);
      if (onFailure) onFailure({
        status: response.status,
        message: FomoString.unknownErrorMessage
      });
    }
    console.log(`Status ${response.status} for: ${subUrl}`)
  }
  setHeader() {
    return {}
  }
  showAlert(message, status, ignore) { }
  handleReload(onReload, alertBody, onFailure) { }
  async asyncFetchV2(payload) {
    this.asyncFetch(payload.subUrl, payload.method, payload.body, payload.onSuccess, payload.onFailure, payload.onUnauthorized, payload.auth, payload.customMessage, payload.ignoreAlert)
  }
}
export default BaseCallApi;