import { AppServer } from './middleware/app';

const app = new AppServer().getApp();
app.listen(3000, () => {
    console.log('Server on port', app.get('port'));
});