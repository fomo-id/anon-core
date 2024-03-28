declare class HttpErrorMessages {
  constructor(customErrorMessages?: {
    status401?: string;
    status400?: string;
    status404?: string;
    status403?: string;
    status409?: string;
    status413?: string;
    status422?: string;
  });

  status401: string;
  status400: string;
  status404: string;
  status403: string;
  status409: string;
  status413: string;
  status422: string;
}

export default HttpErrorMessages;