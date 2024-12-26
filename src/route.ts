import { Router } from "express";
import { AxiosAdapter } from "./adapters/AxiosAdapter.ts";
import { xmlListOfCountryNamesByName, xmlMultiplyNumbers } from "./test.ts";
// import converter from "xml-js";

export const router = Router();

const getApiSoap = async (data?: string) => {
  const axiosAdapter = new AxiosAdapter(xmlMultiplyNumbers.url);

  const res = await axiosAdapter.post<any>("", data, {
    "Content-Type": "text/xml; charset=utf-8",
  });
  return res.data;
};

router.post("/", async (req, res, next) => {
  const response = await getApiSoap(xmlMultiplyNumbers.xml);

  res.send(response);
});
