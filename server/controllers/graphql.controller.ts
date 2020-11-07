import { NextFunction, Request, Response } from "express";

export const graphqlController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};

export const playgroundController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.ENABLE_PLAYGROUND && req.path === "/playground") {
      next();
  } else {
      res.status(403).end();
  }
};