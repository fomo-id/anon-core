import HttpErrorMessages from "./HttpErrorMessages";

type ErrorType ={
  status: number,
  message: string
}

declare class BaseCallApi {
  constructor(devMode: boolean);

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
  handleReload(onReload:()=>void, alertBody:string, onFailure:()=>void| null | undefined):void;
}
export default BaseCallApi;