import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

interface IAppProvider {
  children: React.ReactNode;
}

export interface IDrink {
  id: string;
  name: string;
  image: string;
  info: string;
  glass: string;
}

export interface IValue {
  loading: boolean;
  cocktails: IDrink[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext<IValue | null>(null);

const AppProvider = ({ children }: IAppProvider) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState<IDrink[]>([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newCocktails = drinks.map((item: any) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });

        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  const value: IValue = { loading, cocktails, searchTerm, setSearchTerm };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
