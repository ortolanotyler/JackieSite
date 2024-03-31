import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Tutorial = ({ title, description, img }) => {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: '#FDEDEF' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={img}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div" color='#745B4F'>
                    {title} </Typography>
                <Typography variant="body2" color='#745B4F'>
                    {description} </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{ color: '#745B4F' }}>Read</Button>
                <Button size="small" sx={{ color: '#745B4F' }}>Share</Button>
            </CardActions>
        </Card>
    );
};

export default Tutorial;
