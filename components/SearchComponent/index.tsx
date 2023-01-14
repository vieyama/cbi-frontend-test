import { Dispatch, SetStateAction } from "react";
import { FiSearch } from "react-icons/fi";

import { SearchWrapper } from "./styled";

interface ISearchComponent {
  setSearch?: Dispatch<SetStateAction<string>>;
}

const SearchComponent: React.FC<ISearchComponent> = ({ setSearch }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearch)
      setTimeout(() => {
        setSearch(e.target.value as string);
      }, 300);
  };
  return (
    <SearchWrapper>
      <FiSearch className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search.."
        onChange={handleChange}
      />
    </SearchWrapper>
  );
};

export default SearchComponent;
