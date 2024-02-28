import {Card, CardMedia, CardContent, Grid, Typography} from "@mui/material";

export default function RecipeItem({title, image}) {
    return (
        <Grid sc={{ mt: "1rem"}}Grid item xs={4}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title="Recipe"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}