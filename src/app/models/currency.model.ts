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

export interface LoadSelectedCurrenciesCoursesResponse {
  success: boolean;
  timestamp: number;
  base: string,
  date: Date;
  rates: any;
}

//Приклад того в якому форматі приходять валюти і рейтенги.
//Кількість полів і їх назва завжди не відома, тому не бачу, як передбачити модель.
//Через це замінив їх на any. Хоч, і дуже не хотів.
// export interface Rate {
//   [symbol: string]: number,
//   [symbol: string]: number,
//   [symbol: string]: number,
//   ...
// }

// export interface Currency {
//   [symbol: string]: string,
//   [symbol: string]: string,
//   [symbol: string]: string,
//   ...
// }
