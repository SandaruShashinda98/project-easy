import  Express, { NextFunction, Request, Response }  from "express";
const app = Express();
const port = 3000;

// Global error handler
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
 // internalServerErrorResponse(res, err, err.message);
});

app.get('/', (req:Request, res:Response) => {
  res.send('Hello, World!');
});


app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
