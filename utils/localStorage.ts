import isNull from "lodash/isNull";
import isEmpty from "lodash/isEmpty";

const getLocalStorage = {
  getItem: (name: string) => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(name);
      let state;
      if (!isEmpty(data)) {
        const result = data;
        try {
          state = JSON.parse(result as string);
        } catch (error) {
          state = result;
        }

        return state;
      }
    } else {
      return "";
    }
  },
  setItem: (name: string, data: any) => {
    return (
      typeof window !== "undefined" &&
      localStorage.setItem(name, isNull(data) ? data : data)
    );
  },
  clearItem: (name: string) => {
    return typeof window !== "undefined" && localStorage.removeItem(name);
  },
};

export default getLocalStorage;
