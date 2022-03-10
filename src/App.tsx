import React from 'react';
import './App.css';
import {Layout} from "./features/layout/Layout";
import {ErrorBoundary} from "./features/layout/errorBoundary/ErrorBoundry";
// import {QueryClient, QueryClientProvider} from "react-query";

// const queryClient = new QueryClient();


function App() {
  return (
      <div className="App">
        <ErrorBoundary>
          <Layout>
            {/*<QueryClientProvider client={queryClient}>*/}

            {/*</QueryClientProvider>*/}
          </Layout>
        </ErrorBoundary>
      </div>
  );
}

export default App;
