import { Request, Response } from "express";
import { Mysql } from "../database";

class ReclamosController{

    //Obtener todos los reclamos  
    public async list(req: Request, res: Response) {
        try {
          const reclamo = await Mysql.query("SELECT * FROM reclamos");
          console.log(reclamo);
          res.json(reclamo[0]);
        } catch (error) {
          console.log("Error db: " + error);
        }
      }

    //Obtener solo un reclamo  
    public async getOne(req:Request, res:Response): Promise<any>{
        const {id} = req.params;
        const reclamo =await Mysql.query("SELECT * FROM reclamos WHERE id = ?",[id]);
        if(reclamo.length>0){
          return res.json(reclamo[0]);
        }
        res.status(404).json({text:"No se encontro Reclamo"});
    }

    //crear reclamo
    public async create(req: Request, res: Response) {
        try {
          await Mysql.query("INSERT INTO reclamos set ?", [req.body]);
          res.json({
            message: "Reclamo Guardado",
          });
        } catch (error) {
          console.log("Error: " + error);
        }
      }

    //Actualizar reclamo  
    public async update (req:Request, res:Response): Promise<void>{
       const {id} = req.params;
       await Mysql.query("UPDATE reclamos set ? WHERE id = ?",[req.body,id]);
       res.json({message:"El reclamo se ha Actualizado"});
    }
    
    //Borrar reclamo
    public async delete (req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await Mysql.query("DELETE FROM reclamos WHERE id = ?",[id]);
        res.json({message:"Este reclamo se ha eliminado"});
    }
}

export const reclamosController = new ReclamosController();
