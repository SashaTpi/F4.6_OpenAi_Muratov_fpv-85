import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import RecipePage from './components/RecipePage';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories/');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>App Recipes</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
              <li>
                <Link to="/recipes">Recipes</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/categories">
              <CategoryPage categories={categories} />
            </Route>
            <Route path="/recipes">
              <RecipePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
