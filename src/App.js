import React, {useEffect} from "react"
import {Container, Typography} from "@mui/material"
import {RestaurantMenu} from "./components/RestaurantMenu"
import {Footer} from "./components/Footer"
import {backButton, init, viewport} from '@telegram-apps/sdk'

export default function App() {
  useEffect(() => {
    try {
      init()
      backButton.mount()
      if (viewport.mount.isAvailable()) {
        viewport.mount()
      }
      if (viewport.requestFullscreen.isAvailable()) {
        viewport.requestFullscreen()
      }
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <>
      <Container>
        <br/>
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          Роллы
        </Typography>
        <RestaurantMenu/>
      </Container>
      <Footer/>
    </>
  )
}
