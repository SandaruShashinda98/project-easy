// import * from 'express';
// import { MongoConnection } from './mongo.config';
// import initiateRoutes from '../routes';

// const { version: appVersion } = require('../package.json');

// class App {
//   public app: express.Application | undefined; // Initialize app property with undefined

//   private mongoConnection = new MongoConnection();

//   constructor() {
//     this.initiate();
//     this.setConfig();
//   }

//   private async initiate() {
//     console.log('Initializing the server...');

//     if (this.app) {
//       initiateRoutes(this.app);
//     }
//   }

//   // configuration
//   private setConfig(): void {
//       console.log('Configuring the server...');
//       this.app = express();

//       console.log('Connecting to the database...');
//       this.mongoConnection.connect();
//       this.app.use(express.json({ limit: '25mb' }));
//       this.app.use(express.urlencoded({ extended: false, limit: '25mb' }));

//       // Custom middleware
//       this.app.use((req, res, next) => {
//           // If request comes with the '/api' prefix, then have to remove it.
//           if (req.url.substr(0, 4) === '/api') {
//               req.url = req.url.substr(4);
//           }

//           next();
//       });
//   }
// }

// export default new App().app;
