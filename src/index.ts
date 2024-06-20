import express, { Router } from "express";
import PingController from "./ping/controller";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const router = Router();
const pingController = new PingController();
router.use('/ping', pingController.router)

app.use(router);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))