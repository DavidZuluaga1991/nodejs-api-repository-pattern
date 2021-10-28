import mongoose from 'mongoose';

export class mongoosedb {
    constructor() {
        const url = `${process.env.db_mongo_host}${process.env.db_mongo_user}:${process.env.db_mongo_password}@${process.env.db_mongo_cluster}.mongodb.net/${process.env.db_mongo_database}?retryWrites=true&w=majority`;
        // const options = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true };
        // mongoose.createConnection(`${url}`);

        mongoose.connect(url, { autoIndex: true }).then(db => {
            console.log('Conectado a la base de datos.');
        }).catch(err => console.error(err));

    }
}