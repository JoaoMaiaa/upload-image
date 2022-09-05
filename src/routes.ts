import express from "express";

import { uploadController } from "./controllers/uploadController";

const routes = express.Router();

routes.get("/upload", uploadController.upload);

export { routes };
