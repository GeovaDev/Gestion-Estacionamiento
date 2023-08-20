import { Request,Response } from "express";
class IndexController{
    public index(req:Request, resp:Response){
        resp.send('Hola');
    }
}
export const indexController=new IndexController();