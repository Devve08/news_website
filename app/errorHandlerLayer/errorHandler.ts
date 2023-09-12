import ErrorResponseModel from "../models/common/errorResponseModel";

/**
 *
 * @param {errorResponseReceived} error
 * @returns {Cleaned up ErrorResponseModel}
 */
export default function prepareErrorResponse(error: any) {
  let message = error.response?.data?.message || error.response?.data?.error || error.message || "";
  return new ErrorResponseModel({
    message: message,
    // statusCode: errorStatus,
  });
}
