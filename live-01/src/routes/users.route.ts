import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

//get /users
//get /users/:uuid
//post /users
//put / users/:uuid
//delete /users/:uuid


const usersRoute = Router();

//operação que busca todos os usuários
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: 'Heitor Bello' }];
  res.status(StatusCodes.OK).send(users);
});

//operação que busca um usuário específico
usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  
  res.status(StatusCodes.OK).send({ uuid });
});

//operação para criar um usuário
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  res.status(StatusCodes.CREATED).send(newUser);
});

//altera um determinado usuário
usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  const modifiedUser = req.body;

  modifiedUser.uuid = uuid;

  res.status(StatusCodes.OK).send({ modifiedUser });
});

//deleta um usuário
usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  res.sendStatus(StatusCodes.OK);
});

export default usersRoute;