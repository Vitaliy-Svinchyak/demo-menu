import React from "react"
import {Grid, Card, CardContent, CardMedia, Typography, CardActions, Button} from "@mui/material"

import pizzaImg from "../assets/pizza.jpg"
import burgerImg from "../assets/cheesburger.webp"

const dishes = [
  {
    title: "Пицца Маргарита",
    description: "Классическая пицца с томатами, моцареллой и базиликом.",
    price: "15 €",
    image: pizzaImg
  },
  {
    title: "Чизбургер",
    description: "Сочный бургер с говядиной, сыром чеддер и свежими овощами.",
    price: "12.50 €",
    image: burgerImg
  }
]

export const RestaurantMenu = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {dishes.map((dish, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia component="img" height="200" image={dish.image} alt={dish.title}/>
            <CardContent>
              <Typography variant="h6">{dish.title}</Typography>
              <Typography variant="body2" color="textSecondary">{dish.description}</Typography>
              <Typography variant="h6" color="primary">{dish.price}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary">Добавить в заказ</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
