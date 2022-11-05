"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/202112674', (req, res) => {
            res.send("Alvaro Gabriel Ramirez Alvarez ---- 202112674");
        });
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;
