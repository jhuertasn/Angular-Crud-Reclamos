"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reclamosController_1 = require("../controllers/reclamosController");
class ReclamosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', reclamosController_1.reclamosController.list);
        this.router.get('/:id', reclamosController_1.reclamosController.getOne);
        this.router.post('/', reclamosController_1.reclamosController.create);
        this.router.delete('/:id', reclamosController_1.reclamosController.delete);
        this.router.put('/:id', reclamosController_1.reclamosController.update);
    }
}
const reclamosRoutes = new ReclamosRoutes();
exports.default = reclamosRoutes.router;
