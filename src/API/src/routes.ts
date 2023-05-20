import { Application } from 'express';
import { NoticesRoutes } from './modules/notices/routes';

export default (app: Application) => {
    const noticesRoute = new NoticesRoutes();

    noticesRoute.route(app);

};
