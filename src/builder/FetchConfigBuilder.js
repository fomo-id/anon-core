import HttpErrorMessages from '../HttpErrorMessages'
export default class FetchConfigBuilder {
  constructor() {
    this.subUrl = '';
    this.method = 'GET';
    this.body = null;
    this.onSuccess = null;
    this.onFailure = null;
    this.onUnauthorized = null;
    this.auth = true;
    this.customMessage = new HttpErrorMessages();
    this.ignoreAlert = false;
    this.showAlertTimeout = true
  }

  setSubUrl(subUrl) {
    this.subUrl = subUrl;
    return this;
  }

  setMethod(method) {
    this.method = method;
    return this;
  }

  setBody(body) {
    this.body = body;
    return this;
  }

  setOnSuccess(onSuccess) {
    this.onSuccess = onSuccess;
    return this;
  }

  setOnFailure(onFailure) {
    this.onFailure = onFailure;
    return this;
  }

  setOnUnauthorized(onUnauthorized) {
    this.onUnauthorized = onUnauthorized;
    return this;
  }

  setCustomMessage(customMessage) {
    this.customMessage = customMessage;
    return this;
  }

  setIgnoreAlert(ignoreAlert) {
    this.ignoreAlert = ignoreAlert;
    return this;
  }
  setUnauth() {
    this.auth = false;
    return this
  }
  setDisableAlertTimeout() {
    this.showAlertTimeout = false
    return this
  }

  build() {
    return {
      subUrl: this.subUrl,
      method: this.method,
      body: this.body,
      onSuccess: this.onSuccess,
      onFailure: this.onFailure,
      onUnauthorized: this.onUnauthorized,
      auth: this.auth,
      customMessage: this.customMessage,
      ignoreAlert: this.ignoreAlert,
      showAlertTimeout: this.showAlertTimeout
    };
  }
}