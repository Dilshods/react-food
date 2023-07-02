import {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import { getMealByld } from "../api";
import Loader from "./Loader";


const Retciep = () => {
    const [recipe,setRecipe] = useState([])
    const [showRecipe, setShowRecipe] = useState(false)
    const {id} = useParams()
    const {goBack} = useHistory()
    

    const handleRecipeShow = () => {
        setShowRecipe(!showRecipe)
    }

    useEffect(() => {
        getMealByld(id).then(data => setRecipe(data.meals[0]))
    },[])
    return (
        <div>
            <button className="btn" onClick={goBack}>Go Back</button>
            {!recipe.idMeal ? <Loader /> : (
                <div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1> {recipe.strMeal}</h1> 
                    <h5><b>Category:</b>{recipe.strCategory}</h5>
                    {recipe.strArea ? <h5><b>Area:</b> {recipe.strArea}</h5> : null}
                    <p>{recipe.strInstructions}</p>
                    <button className="btn" onClick={handleRecipeShow}>Show Retciep</button>
                    {showRecipe ? (
                        <table className="cenred">
                       <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                        </thead> 
                        <tbody>
                            {Object.keys(recipe).map(key => {
                                if (key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                    ) : null}
                    
                    {recipe.strYoutube ? (
                        <div className="row">
                            <h5>Video Retciep</h5>
                            <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullscreen title={id} />
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
};


export default Retciep;