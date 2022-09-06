import express from "express";
import multer from "multer";
import path from "path";

import { uploadController } from "./controllers/uploadController";

const routes = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `${new Date().getTime()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

routes.post("/upload", upload.single("file"), uploadController.upload);

export { routes };
