export const xmlListOfCountryNamesByName = {
  url: "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso",
  xml: `<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <ListOfCountryNamesByName xmlns="http://www.oorsprong.org/websamples.countryinfo">
    </ListOfCountryNamesByName>
  </soap12:Body>
</soap12:Envelope>`,
};

export const xmlMultiplyNumbers = {
  url: "http://www.dneonline.com/calculator.asmx",
  xml: `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <Multiply xmlns="http://tempuri.org/">
      <intA>5</intA>
      <intB>5</intB>
    </Multiply>
  </soap:Body>
</soap:Envelope>`,
};
