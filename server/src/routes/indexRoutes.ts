import { Router } from "express";

class IndexRouter {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/202112674', (req, res) =>{
            res.send("Alvaro Gabriel Ramirez Alvarez ---- 202112674");
        });
    }

}

const indexRouter = new IndexRouter();
export default indexRouter.router;