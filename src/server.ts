import express from "express";
import { routes } from "./routes";
import path from "path";

const app = express();

app.use(express.json());
app.use("/files", express.static("uploads"));
app.use("/files", express.static("public"));

app.use(routes);

app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Servidor ligado");
});
