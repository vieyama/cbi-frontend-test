import React, { createContext, useEffect, useState } from "react";

import getLocalStorage from "utils/localStorage";

import type {
  AppContextInterface,
  IQueryContextProvider,
} from "interfaces/iQueryContext";
import axios from "axios";
import { BASE_URL } from "constants/globalVariable";
import Cookies from "js-cookie";
import customAxios from "@/utils/client";

export const QueryContext = createContext<AppContextInterface | null>(null);

const QueryContextProvider: React.FC<IQueryContextProvider> = ({
  children,
}) => {
  const [limit, setLimit] = useState(15);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [dataAgrregate, setDataAgrregate] = useState<{
    aggregate: { count: number };
  }>();

  const [isLoading, setIsLoading] = useState(false);
  const dataTemp = getLocalStorage.getItem("dataContacts");

  const cookie = Cookies.get("auth");

  const authCookie = cookie && JSON.parse(cookie);

  useEffect(() => {
    authCookie && getDataContacts();
  }, []);

  useEffect(() => {
    if (dataTemp) {
      setData(dataTemp?.contact);
      setDataAgrregate(dataTemp?.contact_aggregate);
    }
  }, []);

  const getDataContacts = async () => {
    setIsLoading(true);
    await customAxios
      .get(`/contacts`, {
        params: {
          ...(search && {
            q: search,
          }),
        },
      })
      .then((result) => {
        setData(result?.data);
        setDataAgrregate(result?.data?.length);
        getLocalStorage.setItem("dataContacts", JSON.stringify(result?.data));
        setIsLoading(false);
      });
  };

  const loadMore = () => {
    const total = dataAgrregate?.aggregate?.count;
    if (limit <= (total as number)) {
      setLimit(limit + 5);
    }
  };

  useEffect(() => {
    if (search.length > 0) {
      getDataContacts();
    }
  }, [search]);

  return (
    <QueryContext.Provider
      value={{
        loading: isLoading,
        data,
        loadMore,
        setSearch,
        refetch: getDataContacts,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export default QueryContextProvider;
