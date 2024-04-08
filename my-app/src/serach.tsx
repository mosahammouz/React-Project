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
   // const [searchTerm, setSearchTerm] = useState<string>('');
   // const [people, setPeople] = useState<Person[]>([]);
const {searchTerm,setSearchTerm } =props;
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get<{ results: Person[] }>(`https://swapi.dev/api/people/?search=${searchTerm}`);
    //             setPeople(response.data.results);
   

    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, [searchTerm]);

    // let elem: HTMLElement | null = document.getElementById("mmm");
    // if (elem && searchTerm !== '') {
    //   elem.style.display = "none";
    // } else if (elem) {
    //   elem.style.display = ""; // Reset display to its default value
    // }
   
    //  const tableBody: Element | null = document.querySelector('#charactersTable tbody');
    //  if(tableBody)tableBody.innerHTML=''
    
    return (
        <div>
            <input
                type="text"
                placeholder="Search by name : "
                id="searchInput"
                onChange={handleSearchChange}
                value={searchTerm}
            />
          <br/><br/>
          
{/*       
            <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Eye color</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody id = "mmm2">
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.gender}</td>
              <td>{person.height}</td>
              <td>{person.eye_color}</td>
              <td> <div className="pagination2" >  <button >Details</button> </div></td>
            </tr>
          ))}
        </tbody>
      </table>  
    */}
       
        </div>
    );
};

export default SearchByName;
