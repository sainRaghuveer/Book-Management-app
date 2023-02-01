import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useSearchParams} from "react-router-dom";

const SideBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const initialState=searchParams.getAll("category");

    const [category, setCategory] = useState(initialState || []);

    const initialOrder=searchParams.get("order");

    const [order, setOrder] = useState(initialOrder || "");
    console.log("order", order)

    console.log("category", category)
    console.log("searchParams",searchParams.getAll("category"))

    const handleFilter=(e)=>{
        let newCategory=[...category];
        // if user checks any category it should be stored in state

        //if category is already present pop out of the state
        if(newCategory.includes(e.target.value)){
            //splice, slice, filter
            newCategory.splice(newCategory.indexOf(e.target.value),1);
        }else{
            newCategory.push(e.target.value);
        }

        setCategory(newCategory);

    }

    const handleSort=(e)=>{
        setOrder(e.target.value);
    }

    useEffect(()=>{
        const params={
            category,
            // order,
        }
        order && (params.order=order);
        setSearchParams(params);
    },[category, order]);

  return (
    <div>
        <h3>Filter By</h3>
        <div>
            <input type="checkbox" value="Novel" onChange={handleFilter}
            checked={category.includes("Novel")}
            />
            <label>Novel</label>
        </div>
        <div>
            <input type="checkbox" value="Motivational" onChange={handleFilter}
             checked={category.includes("Motivational")}
            />
            <label >Motivational</label>
        </div>
        <div>
            <input type="checkbox" value="Thriller" onChange={handleFilter}
            checked={category.includes("Thriller")}
            />
            <label>Thriller</label>
        </div>
        <div>
            <input type="checkbox" value="Science_Fiction" onChange={handleFilter}
            checked={category.includes("Science_Fiction")}
            />
            <label>Science Fiction</label>
        </div>
        <h3>Sort By Order</h3>
        <div onChange={handleSort}>
            <input type="radio" name="sort_by" value={"asc"} defaultChecked={order==="asc"}/>
            <label>Ascending</label>
            <input type="radio" name="sort_by" value={"desc"} defaultChecked={order==="desc"}/>
            <label>Descending</label>
        </div>
    </div>
  )
}

export default SideBar