import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const API_BASE_URL = 'http://localhost:8000/api/'

function RecipePage() {
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}recipes/`);
        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipe();
  }, []);

  if (!recipe) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Recipe Page</h2>
      {recipe.map(data => (
        <div key={data.id}>
          <h3>Recipe ID: {data.id}</h3>
          <h4>Title: {data.title}</h4>
          <p>Description: {data.category}</p>
        </div>
      ))}
    </div>
  )
}

export default RecipePage
