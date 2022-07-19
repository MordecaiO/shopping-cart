
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query'; 
import App from './Components/App/App';

// creating a client 
const client = new QueryClient();

ReactDOM.render( 
// providing client to App 
<QueryClientProvider client={client}>
    <App /> 
</QueryClientProvider>  
 
  , document.getElementById('root'))

  
    


