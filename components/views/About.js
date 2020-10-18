import React, { useState, useEffect } from "react"
import { Box, Text, Button, Link, Image } from "theme-ui"
import Header from "../ui/Header"
import CheckinForm from "../ui/forms/CheckinForm"

const About = (props) => (
  <Box
    sx={{
      textAlign: "center",
      px: [1, 2, 4],
      pt: [2, 4],
      pb: [4, 5],
      mx: "auto",
    }}
  >
    <Header />
    <Box
      sx={{
        maxWidth: "900px",
        mx: "auto",
        py: 3,
        textAlign: "left",
      }}
    >
      <Text as="p">
        Like many families in 2020, we were trying to figure out what to do for
        Halloween. As cases are starting to rise in the fall, it didn’t seem
        like a good idea to have batches of trick or treaters at our door. We
        could have done the candy bowl thing, but we wanted to do something a
        little more positive.
      </Text>
      <Text as="p">
        It hit us. Instead of passing out candy, we could donate to those in
        need. It is a whole family project. My wife ordered some decorations.
        The boys helped with the art for a sign that will have a QR code that
        points to this little website I coded up.
      </Text>
      <Text as="p">Pictures coming soon!</Text>
    </Box>
  </Box>
)

export default About
