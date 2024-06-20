import { Request, Response } from "express";
import Controller from "../../base/controller";

export default class PingController extends Controller {

    constructor() {
        super();
        this.router.get('/', this.pong.bind(this));
    }

    pong(req: Request, res: Response) {
        res.json({
            ping: 'pong'
        })
    }

}