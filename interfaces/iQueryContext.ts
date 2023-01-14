import { Dispatch, SetStateAction } from "react";

import { contactType } from "./Contact";

export type refetchType = () => void;

export interface AppContextInterface {
  data: contactType[];
  loading: boolean;
  loadMore: any;
  setSearch?: Dispatch<SetStateAction<string>>;
  refetch: refetchType;
}

export interface IQueryContextProvider {
  children: React.ReactNode;
}
