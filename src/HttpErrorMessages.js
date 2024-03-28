import textAggregate from "./constants/textAggregate";

export default class HttpErrorMessages {
  constructor(customErrorMessages) {
    this.status401 = customErrorMessages?.status401 ?? textAggregate.oneDeviceLoginErrorMessage;
    this.status400 = customErrorMessages?.status400 ?? textAggregate.badRequestMessage;
    this.status404 = customErrorMessages?.status404 ?? textAggregate.postHasBeenDeleted;
    this.status403 = customErrorMessages?.status403 ?? textAggregate.forbiddenErrorMessage;
    this.status409 = customErrorMessages?.status409 ?? textAggregate.duplicateData;
    this.status413 = customErrorMessages?.status413 ?? textAggregate.imageUploadSizeError;
    this.status422 = customErrorMessages?.status422 ?? textAggregate.unprocessableEntityMessage;
  }
}