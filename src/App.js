import React, {useEffect} from "react"
import {Container, Typography, Grid} from "@mui/material"
import {RestaurantMenu} from "./components/RestaurantMenu"
import {Navbar} from "./components/Navbar"
import {Footer} from "./components/Footer"

export default function App() {
  useEffect(() => {
    if (window.Telegram) {
      window.Telegram.WebApp.expand()
      window.Telegram.WebApp.ready()
      window.Telegram.WebApp.themeParams = {}
    }
  }, [])

  return (
    <>
      <Navbar/>
      <Container>
        <br/>
        <Typography variant="h4" align="center" color="secondary" gutterBottom>
          🍕 Популярные блюда
        </Typography>
        <RestaurantMenu/>

        <br/>
        <Typography variant="h4" align="center" color="secondary" gutterBottom>
          🥤 Напитки
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Кока-Кола <span style={{ color: "#1976d2" }}>2 €</span></Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Мохито <span style={{ color: "#1976d2" }}>3 €</span></Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Капучино <span style={{ color: "#1976d2" }}>3 €</span></Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </>
  )
}
