"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomResponseInterceptor = void 0;
const rxjs_1 = require("rxjs");
class CustomResponseInterceptor {
    constructor(message) {
        this.message = message;
    }
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.map)((data) => ({
            data,
            statusCode: context.switchToHttp().getResponse().statusCode,
            message: this.message,
        })));
    }
}
exports.CustomResponseInterceptor = CustomResponseInterceptor;
//# sourceMappingURL=custom-response.interceptor.js.map