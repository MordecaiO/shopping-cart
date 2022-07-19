// Imports
import React from "react";
import useState from "react";
import { useQuery } from "react-query";
// Components
import Item from "./item/index.tsx";
import AddShoppingCartIcon from '@mui/icons-material';
import { LinearProgress, Badge, Grid, Drawer } from "@mui/material";
// Styling 
import { Wrapper } from './App.styles.tsx';

// Types 
export type CartItemType = {
  id: number, 
  title: string, 
  price: number, 
  catergory: string, 
  description: string, 
  image: string 
  quantity: number
}
// function to fetch all products
const getProducts = async () : Promise<CartItemType[]>  => {
  let response = await fetch('https://fakestoreapi.com/products');
  let data = await response.json(); 
  return data; 
}

const App = ()  => {
  // React query server state
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'productsKey', getProducts); 
  console.log(data);
 

  const getTotalItems = () => null; 

  const handleAddToCart = (clickedItem: CartItemType) => null; 

  const handleRemoveFromCart = () => null; 

  if (isLoading) return <LinearProgress /> 
  if (error) return <div>error...  </div>

  return (
    <Wrapper> 
      <Grid container spacing={3}> {/* Main container */}
        {data?.map((item) => (  
          <Grid item key={item.id} xs={12} sm={4}>
            {/* Grid Item occupies full viewport when
          < 600 pixels  .. occupies 1/3 when > 600 pixels  */}
            <Item item={item} handleAddToCart={handleAddToCart} /> 
          </Grid>
      ))}
      </Grid>
      
   </Wrapper>
  );
}

export default App;