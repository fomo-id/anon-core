import HttpErrorMessages from '../HttpErrorMessages';

export default class FetchConfigBuilder {
  private subUrl: string = '';
  private method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' = 'GET';
  private body?: any;
  private onSuccess?: (response: any) => void;
  private onFailure?: (error: any) => void;
  private onUnauthorized?: () => void;
  private auth: boolean = true;
  private customMessage: HttpErrorMessages = new HttpErrorMessages();
  private ignoreAlert: boolean = false;
  private showAlertTimeout: boolean = true;

  setSubUrl(subUrl: string): this {
    this.subUrl = subUrl;
    return this;
  }

  setMethod(method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'): this {
    this.method = method;
    return this;
  }

  setBody(body: any): this {
    this.body = body;
    return this;
  }

  setOnSuccess(onSuccess: (response: any) => void): this {
    this.onSuccess = onSuccess;
    return this;
  }

  setOnFailure(onFailure: (error: any) => void): this {
    this.onFailure = onFailure;
    return this;
  }

  setOnUnauthorized(onUnauthorized: () => void): this {
    this.onUnauthorized = onUnauthorized;
    return this;
  }

  setCustomMessage(customMessage: HttpErrorMessages): this {
    this.customMessage = customMessage;
    return this;
  }

  setIgnoreAlert(ignoreAlert: boolean): this {
    this.ignoreAlert = ignoreAlert;
    return this;
  }

  setUnauth(): this {
    this.auth = false;
    return this;
  }

  setDisableAlertTimeout(): this {
    this.showAlertTimeout = false;
    return this;
  }

  build(): FetchConfig {
    return {
      subUrl: this.subUrl,
      method: this.method,
      body: this.body,
      onSuccess: this.onSuccess ?? (() => {}), // Default onSuccess
      onFailure: this.onFailure ?? ((error) => {
        console.error('Fetch failed:', error);
      }), // Default onFailure with error logging
      onUnauthorized: this.onUnauthorized,
      auth: this.auth,
      customMessage: this.customMessage,
      ignoreAlert: this.ignoreAlert,
      showAlertTimeout: this.showAlertTimeout,
    };
  }
}

// Define a type for the configuration object
interface FetchConfig {
  subUrl: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: any;
  onSuccess?: (response: any) => void;
  onFailure?: (error: any) => void;
  onUnauthorized?: () => void;
  auth: boolean;
  customMessage: HttpErrorMessages;
  ignoreAlert: boolean;
  showAlertTimeout: boolean;
}