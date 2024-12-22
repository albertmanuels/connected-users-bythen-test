import React, { ChangeEvent, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Search here"
        className="w-[60vw] rounded-md px-3 py-2 md:w-[20vw]"
        value={searchTerm}
        onChange={handleOnChange}
      />
      <MdOutlineSearch size={30} className="sm:hidden" />
    </div>
  );
};

export default SearchBar;
