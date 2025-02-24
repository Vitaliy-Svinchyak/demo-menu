import React from "react"
import {Typography, Container} from "@mui/material"

export const Footer = () => {
  return (
    <Container sx={{ mt: 5, py: 3, textAlign: "center", bgcolor: "#f8f8f8" }}>
      <Typography variant="body2">© 2025 Ресторан "У деда Максима"</Typography>
    </Container>
  )
}
