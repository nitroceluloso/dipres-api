
import express, { Express } from "express";
import logger from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

import { RoutesModule } from "./controller/index";
import { setHeaderMiddleware } from "./common/middlewares/set-header/setHeader.middleware";
import { notFoundMiddleware } from "./common/middlewares/not-found/notFound.middleware";

class App {
    server: Express;
    constructor() {
        this.server = express();
        this.config();
        this.routers();
    }

    private config(){
        this.server.use(logger('dev'));
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({ extended: true }));
        this.server.use(cors());
        this.server.use(setHeaderMiddleware);
    }

    private routers() {
        this.server.use('/api', RoutesModule);
        this.server.use(notFoundMiddleware);
        // this.server.use(errMiddle);
    }
}

export const main = async (config: any, cb: Function) => {
    await cb();
    const { server } = new App();
    server.listen(config.PORT, () => {
        console.log("App is running at http://localhost:%d in %s mode", config.PORT, config.ENVIROMENT);
    });
}