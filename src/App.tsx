import React, {useEffect} from 'react';
import './App.css';
import {Layout} from "./features/layout/Layout";
import {ErrorBoundary} from "./features/layout/errorBoundary/ErrorBoundry";
import {fetchBreeds} from "./store/breedStore/breedStore";
import {Route, Routes} from "react-router-dom";
import {Collection} from "./features/collection/Collection";
import {BreedSearcher} from "./features/breedSearcher/BreedSearcher";


function App() {
    useEffect(() => {
        fetchBreeds();
    }, []);

  return (
      <div className="App">
        <ErrorBoundary>
          <Layout>
              <Routes>
                  <Route path="/collection" element={<Collection />} />
                  <Route path="/explore" element={<BreedSearcher />} />
                  <Route path="/" element={<Collection />} />
              </Routes>
          </Layout>
        </ErrorBoundary>
      </div>
  );
}

export default App;
