import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
type Response = {
    data: any;
    message: string;
    statusCode: number;
};
export declare class CustomResponseInterceptor implements NestInterceptor<Response> {
    private readonly message;
    constructor(message: string);
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<Response>;
}
export {};
