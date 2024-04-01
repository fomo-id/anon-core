import HttpErrorMessages from "./HttpErrorMessages";

declare class BaseCallApi {
  constructor(devMode: boolean);

  asyncFetch(
    subUrl: string,
    method: string,
    body: any,
    onSuccess: (res:any) => void,
    onFailure: (err:any) => void,
    onUnauthorized: () => void,
    auth: any,
    customMessage?: HttpErrorMessages,
    ignoreAlert?: boolean
  ): Promise<void>;
  setHeader(): {};
  showAlert(message: string, ignore: any): void;
}
