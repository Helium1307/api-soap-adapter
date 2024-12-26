/* tslint:disable:max-line-length no-empty-interface */
export interface IListOfContinentsByNameInput {}

export interface IListOfContinentsByNameOutput {
    ListOfContinentsByNameResult: CountryInfoServiceSoapTypes.IListOfContinentsByNameResult;
}

export interface IListOfContinentsByCodeInput {}

export interface IListOfContinentsByCodeOutput {
    ListOfContinentsByCodeResult: CountryInfoServiceSoapTypes.IListOfContinentsByCodeResult;
}

export interface IListOfCurrenciesByNameInput {}

export interface IListOfCurrenciesByNameOutput {
    ListOfCurrenciesByNameResult: CountryInfoServiceSoapTypes.IListOfCurrenciesByNameResult;
}

export interface IListOfCurrenciesByCodeInput {}

export interface IListOfCurrenciesByCodeOutput {
    ListOfCurrenciesByCodeResult: CountryInfoServiceSoapTypes.IListOfCurrenciesByCodeResult;
}

export interface ICurrencyNameInput {
    /** xs:string(undefined) */
    sCurrencyISOCode: string;
}

export interface ICurrencyNameOutput {
    /** xs:string(undefined) */
    CurrencyNameResult: string;
}

export interface IListOfCountryNamesByCodeInput {}

export interface IListOfCountryNamesByCodeOutput {
    ListOfCountryNamesByCodeResult: CountryInfoServiceSoapTypes.IListOfCountryNamesByCodeResult;
}

export interface IListOfCountryNamesByNameInput {}

export interface IListOfCountryNamesByNameOutput {
    ListOfCountryNamesByNameResult: CountryInfoServiceSoapTypes.IListOfCountryNamesByNameResult;
}

export interface IListOfCountryNamesGroupedByContinentInput {}

export interface IListOfCountryNamesGroupedByContinentOutput {
    ListOfCountryNamesGroupedByContinentResult: CountryInfoServiceSoapTypes.IListOfCountryNamesGroupedByContinentResult;
}

export interface ICountryNameInput {
    /** xs:string(undefined) */
    sCountryISOCode: string;
}

export interface ICountryNameOutput {
    /** xs:string(undefined) */
    CountryNameResult: string;
}

export interface ICountryISOCodeInput {
    /** xs:string(undefined) */
    sCountryName: string;
}

export interface ICountryISOCodeOutput {
    /** xs:string(undefined) */
    CountryISOCodeResult: string;
}

export interface ICapitalCityInput {
    /** xs:string(undefined) */
    sCountryISOCode: string;
}

export interface ICapitalCityOutput {
    /** xs:string(undefined) */
    CapitalCityResult: string;
}

export interface ICountryCurrencyInput {
    /** xs:string(undefined) */
    sCountryISOCode: string;
}

export interface ICountryCurrencyOutput {
    CountryCurrencyResult: CountryInfoServiceSoapTypes.ICountryCurrencyResult;
}

export interface ICountryFlagInput {
    /** xs:string(undefined) */
    sCountryISOCode: string;
}

export interface ICountryFlagOutput {
    /** xs:string(undefined) */
    CountryFlagResult: string;
}

export interface ICountryIntPhoneCodeInput {
    /** xs:string(undefined) */
    sCountryISOCode: string;
}

export interface ICountryIntPhoneCodeOutput {
    /** xs:string(undefined) */
    CountryIntPhoneCodeResult: string;
}

export interface IFullCountryInfoInput {
    /** xs:string(undefined) */
    sCountryISOCode: string;
}

export interface IFullCountryInfoOutput {
    FullCountryInfoResult: CountryInfoServiceSoapTypes.IFullCountryInfoResult;
}

export interface IFullCountryInfoAllCountriesInput {}

export interface IFullCountryInfoAllCountriesOutput {
    FullCountryInfoAllCountriesResult: CountryInfoServiceSoapTypes.IFullCountryInfoAllCountriesResult;
}

export interface ICountriesUsingCurrencyInput {
    /** xs:string(undefined) */
    sISOCurrencyCode: string;
}

export interface ICountriesUsingCurrencyOutput {
    CountriesUsingCurrencyResult: CountryInfoServiceSoapTypes.ICountriesUsingCurrencyResult;
}

export interface IListOfLanguagesByNameInput {}

export interface IListOfLanguagesByNameOutput {
    ListOfLanguagesByNameResult: CountryInfoServiceSoapTypes.IListOfLanguagesByNameResult;
}

export interface IListOfLanguagesByCodeInput {}

export interface IListOfLanguagesByCodeOutput {
    ListOfLanguagesByCodeResult: CountryInfoServiceSoapTypes.IListOfLanguagesByCodeResult;
}

export interface ILanguageNameInput {
    /** xs:string(undefined) */
    sISOCode: string;
}

export interface ILanguageNameOutput {
    /** xs:string(undefined) */
    LanguageNameResult: string;
}

export interface ILanguageISOCodeInput {
    /** xs:string(undefined) */
    sLanguageName: string;
}

export interface ILanguageISOCodeOutput {
    /** xs:string(undefined) */
    LanguageISOCodeResult: string;
}

export interface ICountryInfoServiceSoapSoap {
    ListOfContinentsByName: (input: IListOfContinentsByNameInput, cb: (err: any | null, result: IListOfContinentsByNameOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    ListOfContinentsByCode: (input: IListOfContinentsByCodeInput, cb: (err: any | null, result: IListOfContinentsByCodeOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    ListOfCurrenciesByName: (input: IListOfCurrenciesByNameInput, cb: (err: any | null, result: IListOfCurrenciesByNameOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    ListOfCurrenciesByCode: (input: IListOfCurrenciesByCodeInput, cb: (err: any | null, result: IListOfCurrenciesByCodeOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    CurrencyName: (input: ICurrencyNameInput, cb: (err: any | null, result: ICurrencyNameOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    ListOfCountryNamesByCode: (input: IListOfCountryNamesByCodeInput, cb: (err: any | null, result: IListOfCountryNamesByCodeOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    ListOfCountryNamesByName: (input: IListOfCountryNamesByNameInput, cb: (err: any | null, result: IListOfCountryNamesByNameOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    ListOfCountryNamesGroupedByContinent: (input: IListOfCountryNamesGroupedByContinentInput, cb: (err: any | null, result: IListOfCountryNamesGroupedByContinentOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    CountryName: (input: ICountryNameInput, cb: (err: any | null, result: ICountryNameOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    CountryISOCode: (input: ICountryISOCodeInput, cb: (err: any | null, result: ICountryISOCodeOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    CapitalCity: (input: ICapitalCityInput, cb: (err: any | null, result: ICapitalCityOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    CountryCurrency: (input: ICountryCurrencyInput, cb: (err: any | null, result: ICountryCurrencyOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    CountryFlag: (input: ICountryFlagInput, cb: (err: any | null, result: ICountryFlagOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    CountryIntPhoneCode: (input: ICountryIntPhoneCodeInput, cb: (err: any | null, result: ICountryIntPhoneCodeOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    FullCountryInfo: (input: IFullCountryInfoInput, cb: (err: any | null, result: IFullCountryInfoOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    FullCountryInfoAllCountries: (input: IFullCountryInfoAllCountriesInput, cb: (err: any | null, result: IFullCountryInfoAllCountriesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    CountriesUsingCurrency: (input: ICountriesUsingCurrencyInput, cb: (err: any | null, result: ICountriesUsingCurrencyOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    ListOfLanguagesByName: (input: IListOfLanguagesByNameInput, cb: (err: any | null, result: IListOfLanguagesByNameOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    ListOfLanguagesByCode: (input: IListOfLanguagesByCodeInput, cb: (err: any | null, result: IListOfLanguagesByCodeOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    LanguageName: (input: ILanguageNameInput, cb: (err: any | null, result: ILanguageNameOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    LanguageISOCode: (input: ILanguageISOCodeInput, cb: (err: any | null, result: ILanguageISOCodeOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
}

export namespace CountryInfoServiceSoapTypes {
    export interface ItContinent {
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sCode: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sName: string;
    }
    export interface IListOfContinentsByNameResult {
        tContinent: CountryInfoServiceSoapTypes.ItContinent[];
    }
    export interface IListOfContinentsByCodeResult {
        tContinent: CountryInfoServiceSoapTypes.ItContinent[];
    }
    export interface ItCurrency {
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sISOCode: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sName: string;
    }
    export interface IListOfCurrenciesByNameResult {
        tCurrency: CountryInfoServiceSoapTypes.ItCurrency[];
    }
    export interface IListOfCurrenciesByCodeResult {
        tCurrency: CountryInfoServiceSoapTypes.ItCurrency[];
    }
    export interface ItCountryCodeAndName {
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sISOCode: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sName: string;
    }
    export interface IListOfCountryNamesByCodeResult {
        tCountryCodeAndName: CountryInfoServiceSoapTypes.ItCountryCodeAndName[];
    }
    export interface IListOfCountryNamesByNameResult {
        tCountryCodeAndName: CountryInfoServiceSoapTypes.ItCountryCodeAndName[];
    }
    export interface IContinent {
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sCode: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sName: string;
    }
    export interface ICountryCodeAndNames {
        tCountryCodeAndName: CountryInfoServiceSoapTypes.ItCountryCodeAndName[];
    }
    export interface ItCountryCodeAndNameGroupedByContinent {
        Continent: CountryInfoServiceSoapTypes.IContinent;
        CountryCodeAndNames: CountryInfoServiceSoapTypes.ICountryCodeAndNames;
    }
    export interface IListOfCountryNamesGroupedByContinentResult {
        tCountryCodeAndNameGroupedByContinent: CountryInfoServiceSoapTypes.ItCountryCodeAndNameGroupedByContinent[];
    }
    export interface ICountryCurrencyResult {
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sISOCode: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sName: string;
    }
    export interface ItLanguage {
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sISOCode: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sName: string;
    }
    export interface ILanguages {
        tLanguage: CountryInfoServiceSoapTypes.ItLanguage[];
    }
    export interface IFullCountryInfoResult {
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sISOCode: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sName: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sCapitalCity: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sPhoneCode: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sContinentCode: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sCurrencyISOCode: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sCountryFlag: string;
        Languages: CountryInfoServiceSoapTypes.ILanguages;
    }
    export interface ItCountryInfo {
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sISOCode: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sName: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sCapitalCity: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sPhoneCode: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sContinentCode: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sCurrencyISOCode: string;
        /** http://www.oorsprong.org/websamples.countryinfo#xs:string(undefined) */
        sCountryFlag: string;
        Languages: CountryInfoServiceSoapTypes.ILanguages;
    }
    export interface IFullCountryInfoAllCountriesResult {
        tCountryInfo: CountryInfoServiceSoapTypes.ItCountryInfo[];
    }
    export interface ICountriesUsingCurrencyResult {
        tCountryCodeAndName: CountryInfoServiceSoapTypes.ItCountryCodeAndName[];
    }
    export interface IListOfLanguagesByNameResult {
        tLanguage: CountryInfoServiceSoapTypes.ItLanguage[];
    }
    export interface IListOfLanguagesByCodeResult {
        tLanguage: CountryInfoServiceSoapTypes.ItLanguage[];
    }
}
