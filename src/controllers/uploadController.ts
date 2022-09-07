import { Response, Request } from "express";
import { uploadService } from "../services/serviceUpload";

export const uploadController = {
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
