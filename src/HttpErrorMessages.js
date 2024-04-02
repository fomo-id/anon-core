import FomoString from "./constants/FomoString";

export default class HttpErrorMessages {
  constructor(customErrorMessages) {
    this.status401 = customErrorMessages?.status401 ?? FomoString.oneDeviceLoginErrorMessage;
    this.status400 = customErrorMessages?.status400 ?? FomoString.badRequestMessage;
    this.status404 = customErrorMessages?.status404 ?? FomoString.postHasBeenDeleted;
    this.status403 = customErrorMessages?.status403 ?? FomoString.forbiddenErrorMessage;
    this.status409 = customErrorMessages?.status409 ?? FomoString.duplicateData;
    this.status413 = customErrorMessages?.status413 ?? FomoString.imageUploadSizeError;
    this.status422 = customErrorMessages?.status422 ?? FomoString.unprocessableEntityMessage;
  }
}