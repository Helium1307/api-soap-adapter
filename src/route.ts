import { Router } from "express";
import { AxiosAdapter } from "./adapters/AxiosAdapter.ts";
import { xmlBody } from "./test.ts";
import converter from "xml-js";

export const router = Router();
const baseUrl =
  "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso";

const getApiSoap = async (data?: string) => {
  const axiosAdapter = new AxiosAdapter(baseUrl);

  const res = await axiosAdapter.post<any>("/", data, {
    "Content-Type": "text/xml; charset=utf-8",
  });

  const result = converter.xml2json(res.data, {
    compact: true,
    spaces: 4,
  });
  console.log(result);
  return result;
};

router.post("/", async (req, res, next) => {
  const response = await getApiSoap(xmlBody);

  res.send(response);
});
