import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
    const {idCategory, strCategory, strCategoryThumb,strCategoryDescription} = props
    return (
      <div className="card">
        <div className="card-image">
          <img src={strCategoryThumb} alt={strCategory} />
          
        </div>
        <div className="card-content">
          <h4 className="card-title"><b>{strCategory}</b></h4>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
        </div>
        <div className='card-action'>
          <Link to={`/category/${strCategory}`} className='btn'>
            Watch Categors
          </Link>
        </div>
    </div>
      
      
    );
};


export  {CategoryItem};