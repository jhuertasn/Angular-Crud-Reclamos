"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reclamosController = void 0;
const database_1 = require("../database");
class ReclamosController {
    //Obtener todos los reclamos  
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reclamo = yield database_1.Mysql.query("SELECT * FROM reclamos");
                console.log(reclamo);
                res.json(reclamo[0]);
            }
            catch (error) {
                console.log("Error db: " + error);
            }
        });
    }
    //Obtener solo un reclamo  
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const reclamo = yield database_1.Mysql.query("SELECT * FROM reclamos WHERE id = ?", [id]);
            if (reclamo.length > 0) {
                return res.json(reclamo[0]);
            }
            res.status(404).json({ text: "No se encontro Reclamo" });
        });
    }
    //crear reclamo
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.Mysql.query("INSERT INTO reclamos set ?", [req.body]);
                res.json({
                    message: "Reclamo Guardado",
                });
            }
            catch (error) {
                console.log("Error: " + error);
            }
        });
    }
    //Actualizar reclamo  
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.Mysql.query("UPDATE reclamos set ? WHERE id = ?", [req.body, id]);
            res.json({ message: "El reclamo se ha Actualizado" });
        });
    }
    //Borrar reclamo
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.Mysql.query("DELETE FROM reclamos WHERE id = ?", [id]);
            res.json({ message: "Este reclamo se ha eliminado" });
        });
    }
}
exports.reclamosController = new ReclamosController();
