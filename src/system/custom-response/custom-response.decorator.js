"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomResponse = CustomResponse;
const common_1 = require("@nestjs/common");
const custom_response_interceptor_1 = require("./custom-response.interceptor");
function CustomResponse(message) {
    return (0, common_1.UseInterceptors)(new custom_response_interceptor_1.CustomResponseInterceptor(message));
}
//# sourceMappingURL=custom-response.decorator.js.map