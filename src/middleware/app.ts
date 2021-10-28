process.env.APP_ENV = process.env.APP_ENV || 'development';
import express from 'express';
import dotenv from 'dotenv';
import { loadControllers } from 'awilix-express';
import { Container } from './container';
import cors from "cors";

export class AppServer {
    private app: express.Application = express();

    constructor() {
        this.config();
        this.container();
        this.controllers();
    }

    private config() {
        dotenv.config({ path: `${__dirname}/../../config/${process.env.APP_ENV}.env` });
        this.app.set('port', process.env.APP_PORT || 3001);
        this.app.use(express.json());
        this.app.use(cors());
    }

    private container() {
        // tslint:disable-next-line: no-unused-expression
        new Container(this.app);
    }

    private controllers() {
        this.app.use(loadControllers('./../controllers/*.ts', { cwd: __dirname }));
    }

    public getApp(): express.Application {
        return this.app;
    }
}
// dotenv.config({ path: `${__dirname}/../config/${process.env.APP_ENV}.env` });
// const app: express.Application = express();

// app.set('port', process.env.APP_PORT || 3001);

// app.get('/', (req, res) => {
//     res.send('Running ..');
// });

// export { app };


// import express from 'express';
// import dotenv from 'dotenv';
// import morgan from 'morgan';
// import cors from 'cors';

// class Server {
//     public app = express();
//     public dotenv = dotenv.config({ path: '.env' });

//     constructor() {
//         this.config();
//     }

//     private config(): void {
//         this.app.set('port', process.env.APP_PORT || 3001);

//         this.app.use(morgan('dev'));
//         this.app.use(cors());
//         this.app.use(express.json());
//         // this.app.use(express.urlencoded({extended: false}));
//     }
//     public start(): void {
//         this.app.listen(this.app.get('port'), () => {
//             console.log('Server on port', this.app.get('port'));
//         });
//     }
// }

// const server = new Server();
// server.start();

