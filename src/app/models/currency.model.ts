export interface Currency {
  [symbol: string]: string;
}

export interface ConvertCurrencyParams {
  from: string;
  to: string;
  amount: number;
}

export interface LoadManyCurrenciesResponse {
  success: boolean;
  symbols: any;
}

export interface ConvertCurrencyResponse {
  success: boolean;
  query: {
    from: string;
    to: string;
    amount: number;
  };
  info: {
    timestamp: number;
    rate: number;
  };
  historical: string;
  date: Date;
  result: number;
}
