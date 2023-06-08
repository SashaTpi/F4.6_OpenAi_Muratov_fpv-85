import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:8000/api/';

function CategoryPage() {
  const { categoryId } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipesByCategory = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}categories/${categoryId}/recipes/`);
        setRecipes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipesByCategory();
  }, [categoryId]);

  return (
    <div>
      <h2>Category Page</h2>
      <h3>Category ID: {categoryId}</h3>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPage;
