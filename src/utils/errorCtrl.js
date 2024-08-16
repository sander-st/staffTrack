export class HttpError extends Error {
  // #statusCode;
  constructor(message, statusCode) {
    super(message);
    this.error = message;
    this._statusCode = statusCode ?? 200;
    this.timestamp = new Date();

    // if (Error.captureStackTrace) {
    //   Error.captureStackTrace(this, HttpError);
    // }
  }

  getFormattedErrorMessage() {
    return `${this.name} at ${this.timestamp.toISOString()}: ${this.message}`;
  }
}

export class DbError extends HttpError {
  constructor(message, error, timestamp, _statusCode) {
    super(message, error, timestamp, _statusCode);
    this.db = "Error database";
  }
}
