import HttpErrorMessages from "./HttpErrorMessages";

type ErrorType ={
  status: number,
  message: string
}
type PayloadType = {
  subUrl: string,
  method: string,
  body?: any,
  onSuccess?: (res:any) => void,
  onFailure?: (err:ErrorType) => void,
  onUnauthorized?: () => void | null | undefined,
  auth?: boolean ,
  customMessage?: HttpErrorMessages,
  ignoreAlert?: boolean
}

declare class BaseCallApi {
  constructor();

  asyncFetch(
    subUrl: string,
    method: string,
    body: any,
    onSuccess: (res:any) => void,
    onFailure: (err:ErrorType) => void,
    onUnauthorized: () => void | null | undefined,
    auth: boolean ,
    customMessage?: HttpErrorMessages,
    ignoreAlert?: boolean
  ): Promise<void>;
  setHeader(): {};
  showAlert(message: string, status :number, ignore: boolean): void;
  asyncFetchV2(payload:PayloadType): Promise<void>;
}
export default BaseCallApi;