import { Response, Request } from "express";
import { uploadService } from "../services/serviceUpload";

export const uploadController = {
  //GET /upload
  index: async (req: Request, res: Response) => {
    try {
      const retrieve = await uploadService.getPath();
      if (!retrieve) return res.json({ message: false });
      return res.json({ message: true, path: retrieve });
    } catch (err) {
      return res.json({ message: false });
    }
  },

  // POST /upload
  upload: async (req: Request, res: Response) => {
    const path = req.file?.path;
    try {
      await uploadService.upload(String(path));
      return res.json({ message: true, file: req.file?.path });
    } catch (err) {
      return res.json({ message: false });
    }
  },
};
