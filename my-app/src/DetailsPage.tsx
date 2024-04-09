import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Person2 {
  name: string;
  gender: string;
  hair_color: string;
  created: string;
  height: string;
  films: string[]; // Array of film URLs
}

interface Film {
  title: string;
  director: string;
  release_date: string;
}

const DetailsPage = () => {
  const { id } = useParams();
  const [personData, setPersonData] = useState<Person2 | null>(null);
  const [films, setFilms] = useState<Film[]>([]); // Array to store film data

  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        const response = await axios.get<Person2>(`https://swapi.dev/api/people/${id}/`);
        setPersonData(response.data);
        
        // Fetch film data for each film URL
        const filmRequests = response.data.films.map(filmUrl => axios.get<Film>(filmUrl));
        const filmResponses = await Promise.all(filmRequests);
        const filmData = filmResponses.map(response => response.data);
        setFilms(filmData);
      } catch (error) {
        console.error('Error fetching person data:', error);
      }
    };

    fetchPersonData();
  }, [id]);

  return (
    <div>
      <h1 style={{ textDecoration: 'underline' }}>Details Page</h1>
      {personData && (
        <table>
          <tbody>
            <tr>
              <td>
                <div style={{ float: 'left' }}>
                  <p><strong>Id:</strong> {id}</p>
                  <p><strong>Name:</strong> {personData.name}</p>
                  <p><strong>Gender:</strong> {personData.gender}</p>
                  <p><strong>Height:</strong> {personData.height}</p>
                  <p><strong>Hair Color:</strong> {personData.hair_color}</p>
                  <p><strong>Created Date:</strong> {personData.created}</p>
                </div>
              </td>
              <td style={{ position: 'relative' }}>
                <h2 style={{ textDecoration: 'underline', position: 'absolute', top: 0, left: 0, margin: 0 }}>Person's films</h2>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Title</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Director</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Release Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {films.map((film, index) => (
                      <tr key={index}>
                        <td>{film.title}</td>
                        <td>{film.director}</td>
                        <td>{film.release_date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DetailsPage;
