class ExpressError extends Error {
    constructor(message, status) {
        super(); 
        this.message = message; 
        this.status = status;
    }
}

class BadRequestError extends Error {
    constructor(message = "Bad Request") {
        super(message, 404); 
    }
}

class NotFoundError extends Error {
    constructor(message = "Not Found") {
        super(message, 404); 
    }
}

module.exports = {
    ExpressError: ExpressError,
    NotFoundError: NotFoundError, 
    BadRequestError: BadRequestError,
}; 