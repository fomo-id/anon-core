import { BaseCallApi } from "./src/BaseCallApi";
import HttpErrorMessages from "./src/HttpErrorMessages";

declare module 'FomoString' {
  const FomoString: any;
  export default FomoString;
}

declare module 'HttpErrorMessages' {
  const HttpErrorMessages: HttpErrorMessages;
  export default HttpErrorMessages;
}

declare module 'Global' {
  const Global: any;
  export default Global;
}

declare module 'BaseCallApi' {
  const BaseCallApi: BaseCallApi;
  export default BaseCallApi;
}
