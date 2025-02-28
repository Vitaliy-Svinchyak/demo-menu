import React from "react"
import {Typography, Container} from "@mui/material"

export const Footer = () => {
  return (
    <Container sx={{ mt: 5, py: 3, textAlign: "center", bgcolor: "#f8f8f8", ml: 0, mr: 0, maxWidth: 'none !important' }}>
      <Typography variant="body2">© 2025 Ресторан "Nori Dori"</Typography>
    </Container>
  )
}
