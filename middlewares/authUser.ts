import type { NextFunction, Request } from "express";

export const authUser = (req: Request, res: Response, next: NextFunction) => {
    const { username, data } = req.body;
}