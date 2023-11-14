import { Injectable, NestMiddleware, Logger } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
    private logger = new Logger('HTTP');
    use(req: Request, res: Response, next: NextFunction): void {
        console.log(`req:`, {
            headers: req.headers,
            body: req.body,
        })
        next()
    }
}