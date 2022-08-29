

import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const statusRoute = Router();

statusRoute.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(StatusCodes.OK);
});// Quando chegar a requisição na rota "status" ele segue o determinado comando que fizemos

export default statusRoute;