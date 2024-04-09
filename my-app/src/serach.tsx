import React from "react";
<link rel="stylesheet" href="index.css"/>

 export interface Person {
    name: string;
    gender: string;
    height: string;
    eye_color: string;
    url :string;
}
type SearchByNameProps ={
    //next: () => void;
    //prev: ()=> void;
    searchTerm : string; 
    setSearchTerm :(searchTerm: string)=>void; 
    //people : Person[] ;
   // setPeople : ( people : Person[]  )=>void; 
  }
  
const SearchByName = ( props:SearchByNameProps ) => {

   const {searchTerm,setSearchTerm } =props;
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };


    
    return (
        <div>
            <input
                type="text"
                placeholder="Search by name : "
                id="searchInput"
                onChange={handleSearchChange}
                value={searchTerm}
            />
                 
        </div>
    );
};

export default SearchByName;
