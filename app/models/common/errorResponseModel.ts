class ErrorResponseModel {
    message = undefined;
    statusCode = undefined;
    constructor(values: any) {
      this.message = values.message;
      this.statusCode = values.statusCode;
    }
  }
  
  export default ErrorResponseModel;
  