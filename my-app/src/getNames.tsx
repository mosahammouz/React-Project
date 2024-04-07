import React, { useState, useEffect } from 'react';
import SearchByName from './serach';
import axios from 'axios';

interface Person {
  name: string;
  gender: string;
  height: string;
  eye_color: string;
}



const SWAPIComponent: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {

        
        const response = await axios.get<{ results: Person[] }>(`https://swapi.dev/api/people/?page=${currentPage}`);
        setPeople(response.data.results);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]); // Include currentPage in the dependency array

  

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < 9) { // Assuming there are 9 pages in total
      setCurrentPage(currentPage + 1);
    }
  };

const showDetails = (id: string) => {
    const url = `Page2.html?exampleParam=${id}`;
    window.location.href = url;
  };


  return (
    <div>
      <h2>Star Wars Characters</h2>
      <br/><br/>
      <SearchByName  next={nextPage} prev={prevPage} /> 
      <br/><br/>
        <table id="charactersTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Eye color</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody id = "mmm">
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
         <div className="pagination">
        <button id="prevBtn" onClick={prevPage}>Previous</button>
        <span id="pageInfo">PAGEeeeeeeeeeeeE {currentPage}</span>
        <button id="nextBtn" onClick={nextPage}>Next</button>
      </div>  

     

    </div>
  );
};

export default SWAPIComponent;
