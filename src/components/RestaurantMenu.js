import React from "react"
import {Grid, Card, CardContent, CardMedia, Typography, CardActions, Button} from "@mui/material"
import BuyIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

import biba from "../assets/biba.webp"
import blufin from "../assets/blufin.webp"
import cappa from "../assets/cappa.webp"
import chinases from "../assets/chinases.webp"
import tangu from "../assets/tangu.webp"
import kuoto from "../assets/kuoto.webp"
import totoro from "../assets/totoro.webp"
import umi from "../assets/umi.webp"

const dishes = [
  {
    title: "Биба&Боба",
    description: "лосось, тунец, сливочный сыр, авокадо, манго, хурма, сладкий чили, огурец, тобико.",
    price: "19 €",
    image: biba
  },
  {
    title: "Блюфин",
    description: "тунец, лосось, авокадо, рис, сливочный сыр, батат пай, трюфельный соус.",
    price: "16 €",
    image: blufin
  },
  {
    title: "Каппа",
    description: "креветка, водоросли чука, сливочный сыр, авокадо, ореховый соус, тобико, кунжут, рис.",
    price: "17 €",
    image: cappa
  },
  {
    title: "Чиназес",
    description: "креветка темпура, чеддер, сливочный сыр, рис, хурма, огурец, тобико, унаги.",
    price: "17 €",
    image: chinases
  },
  {
    title: "Тэнгу",
    description: "тунец, креветка темпура, сливочный сыр, рис, авокадо, шрирача, соус из манго и сладкого чили, тобико.",
    price: "19 €",
    image: tangu
  },
  {
    title: "Киото",
    description: "лосось, сливочный сыр, рис, хурма, апельсин, карамель, унаги соус, тобико .",
    price: "16 €",
    image: kuoto
  },
  {
    title: "Тоторо",
    description: "тунец, лосось, сливочный сыр, огурец, спайси соус, рис, терияки, тобико, зеленый лук.",
    price: "16 €",
    image: totoro
  },
  {
    title: "Уми",
    description: "лосось, креветка, тунец, авокадо, спайси соус, понзу, редис, рис.",
    price: "16 €",
    image: umi
  },
]

export const RestaurantMenu = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {dishes.map((dish, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card raised={true}>
            <CardMedia component="img" height="200" image={dish.image} alt={dish.title}/>
            <CardContent>
              <Typography variant="h6">{dish.title}</Typography>
              <Typography variant="body2" color="textSecondary">{dish.description}</Typography>
              <Typography variant="h6" color="primary" fontWeight={900}>{dish.price}</Typography>
            </CardContent>
            <CardActions>
              <Button size="large" color="textPrimary" variant="contained" startIcon={<BuyIcon/>}>Заказать</Button>
              <Button size="large" color="textPrimary" variant="contained" startIcon={<FavoriteIcon/>}>10</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
