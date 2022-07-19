// Imports
import React from "react";
import useState from "react";
import { useQuery } from "react-query";
// Material UI components
import AddShoppingCartIcon from '@mui/icons-material';
import { LinearProgress, Badge, Grid, Drawer } from "@mui/material";
// Styling 
import { Wrapper } from './App.styles';

// Types 
export type CartItemType = {
  id: number, 
  title: string, 
  price: number, 
  catergory: string, 
  decription: string, 
  image: string 
  quantity: number
}

const getProducts = async () : Promise<CartItemType>  => {
  let response = await fetch('https://fakestoreapi.com/products');
  let data = await response.json(); 
  return data; 
}

const App  = () => {
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;