import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

type Response = {
  data: any;
  message: string;
  statusCode: number;
};

export class CustomResponseInterceptor implements NestInterceptor<Response> {
  constructor(private readonly message: string) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<Response> {
    return next.handle().pipe(
      map((data) => ({
        data,
        statusCode: context.switchToHttp().getResponse().statusCode,
        message: this.message,
      })),
    );
  }
}
