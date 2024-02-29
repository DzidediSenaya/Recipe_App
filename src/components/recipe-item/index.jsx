import { Card, CardMedia, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function RecipeItem({ title, image, id }) {
    return (
        <Grid sc={{ mt: "1rem" }} Grid item xs={4}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title="Recipe"
                />
                <CardContent>
                    <Link to={`/recipes/${id}`}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                    </Link>
                </CardContent>
            </Card>
        </Grid>
    );
}