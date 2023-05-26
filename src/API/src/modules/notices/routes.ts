import { Application, Request, Response } from 'express';
import { NoticeController } from './Controllers/notice.controller';


export class NoticesRoutes {
    private noticesController = new NoticeController();

    public route(app: Application) {
        // create notice
        app.post('/notice/create', (req: Request, res: Response) => {
            //this.noticesController.createNotice(req, res);
        });

    }
}
