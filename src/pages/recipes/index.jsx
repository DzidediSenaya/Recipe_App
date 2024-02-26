import { Grid, Container, TextField } from "@mui/material";
import RecipeItem from "../../components/recipe-item";
import { useState } from "react";
import { useEffect } from "react";


export default function Recipes() {
    //prepare url
    const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
    url.searchParams.append('apiKey', '2a8aa44ca9004671a4948178c1ebc72a')
    const [recipes, setRecipes] = useState([]);

    const searchRecipes = () => {
        //fetch recipes
        fetch(url)
            .then((response) => response.json())
            .then((data) => {//update the recipes state
                setRecipes(data.results);
                //console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    useEffect(searchRecipes, []);

    return (
        <Container sx={{ my: '2rem' }}>
            <TextField
                fullWidth
                id="outlined-basic"
                label="Enter a keyword to search recipes and hit Enter"
                variant="outlined"
            />
            <Grid sx={{ mt: '1rem' }} container spacing={3}>
                {recipes.map((recipe) => <RecipeItem  key={recipe.id} title={recipe.title} image={recipe.image}/>
                )}
            </Grid>
        </Container>
    );
}