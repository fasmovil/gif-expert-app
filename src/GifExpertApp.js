import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = props => {
  
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <Fragment>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={ setCategories }></AddCategory>
      <hr />
      
      <ol>
        {
          categories.map(category => {
            return <GifGrid
              key={ category } 
              category={ category }></GifGrid>
          })
        }
      </ol>
    </Fragment>
  );
}



export default GifExpertApp
