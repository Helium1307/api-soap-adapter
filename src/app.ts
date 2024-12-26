import express from "express";
import { router } from "./route.ts";
import xmlParser from "express-xml-bodyparser";

export const app = express();

app.use(express.json());
app.use(xmlParser());
app.use(router);
