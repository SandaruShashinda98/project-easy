import  Express, { NextFunction, Request, Response }  from "express";
import routes from "./routes";
import connect from "./config/mongo.config";

const app = Express();
const port = 3000;

app.use(Express.json())

app.get('/', (req:Request, res:Response, next:NextFunction) => {
  res.send('Hello, World!');
  next();
});


app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
  connect();
  routes(app);
});
