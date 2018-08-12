import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class UserCard extends Component {
    render() {
        return (
            <Card>
                <CardMedia
                    style={{ height: 0, paddingTop: '56.25%' }}
                    image="https://images.unsplash.com/photo-1532683373866-26c2ec8dc0c7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=f11de577314edb910067bbdf31d249d0"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        İsim Soyisim
                    </Typography>
                    <Typography component="p">
                        Lorem İpsum dolor si amet
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Konuşma başlat
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default UserCard;