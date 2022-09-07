import express from "express";
import multer from "multer";

import { storage } from "./config/storage";

import { uploadController } from "./controllers/uploadController";

const routes = express.Router();

const upload = multer({ storage: storage });

routes.post("/upload", upload.single("file"), uploadController.upload);

export { routes };
