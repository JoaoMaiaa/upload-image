import { Response, Request } from "express";

export const uploadController = {
  upload: async (req: Request, res: Response) => {
    try {
      console.log(req.file);
      return res.json({ message: true });
    } catch (err) {
      return res.json({ message: false });
    }
  },
};
