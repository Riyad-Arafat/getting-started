export interface ICountry {
  code?: string;
  name?: string;
  native?: string;
  phone?: string;
  capital?: string;
  currency?: string;
  languages?: [ILanguage];
}

export interface ILanguage {
  code?: string;
  name?: string;
}
