import db from './models';
import routes from './routes';
class Bootstrap{
    constructor(app){
        this.app = app;
        this.start();
        this.connectDB();
        this.middlewares();
        this.routes();
    }

    connectDB(){
        db.sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully.');
            db.sequelize.sync().then(() => {
                console.log('Database synced successfully.');
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    }

    middlewares(){

    }

    start(){
        const {app} = this;
        app.listen(app.get('port'), () => {
            console.log('Server on port', app.get('port'));
        });
    }

    routes(){
        routes(this.app);   
    }
}

export default Bootstrap;