import { Button } from "@mui/material"; 
import React from "react";
import { FC } from "react";
import { CartItemType } from "../App";
import { Wrapper } from "./item.styles.ts"; 

type Props = {
    item: CartItemType,
    handleAddToCart: (clickedItem: CartItemType) => void 
};

const Item: FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}/> 
    </Wrapper>


)
    



export default Item;