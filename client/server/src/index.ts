import express, {Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import adminRoutes from './routes/adminRoutes';
import indexRoutes from './routes/indexRoutes';

class Server{
    public app: Application;
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }
    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : false}));
    }
    routes():void{
        //this.app.use('/', indexRoutes);
        this.app.use('/api/vehiculos', adminRoutes);
        this.app.use('/api/usuarios', adminRoutes);
        this.app.use('/api/asignaciones', adminRoutes);
        this.app.use('/api/login', adminRoutes);
        this.app.use('/api/generarqr',adminRoutes);
    }
    start():void{
        this.app.listen(this.app.get('port'),()=>(console.log('Servidor en el puerto ',this.app.get('port'))));
    }
}
const server = new Server();
server.start();




//console.log('Funciona xd');