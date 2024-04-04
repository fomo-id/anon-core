import HttpErrorMessages from "./HttpErrorMessages";

declare class BaseCallApi {
  constructor(devMode: boolean);

  asyncFetch(
    subUrl: string,
    method: string,
    body: any,
    onSuccess: (res:any) => void,
    onFailure: (err:any) => void,
    onUnauthorized: () => void | null | undefined,
    auth: boolean ,
    customMessage?: HttpErrorMessages,
    ignoreAlert?: boolean
  ): Promise<void>;
  setHeader(): {};
  showAlert(message: string, ignore: boolean): void;
}
export default BaseCallApi;