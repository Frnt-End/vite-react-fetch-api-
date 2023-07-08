import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";

interface ContextProps {
  theData: Array<any>;
  setTheData: React.Dispatch<React.SetStateAction<any[]>>;
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = createContext({} as ContextProps);

export const AppProvider = ({ children }: any) => {
  const [theData, setTheData] = useState<any[]>([]);
  const [pageNum, setPageNum] = useState<number>(1);

  const fetchData = async (pageNum: number) => {
    try {
      const response = await axios.get(
        `http://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&page=${pageNum}&api_key=db933426-eb41-4dbc-9cda-60bc56b6d916`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const { data, refetch } = useQuery<Array<any>>(
    ["list"],
    () => fetchData(pageNum),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    setTheData(data ?? []);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [pageNum, refetch]);

  console.log("The Data is:", theData);

  const contextValue: ContextProps = {
    theData,
    setTheData,
    pageNum,
    setPageNum,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
