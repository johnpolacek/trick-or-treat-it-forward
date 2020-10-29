import CONFIG from "../../app.config.js"
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
      <Text as="h2" sx={{ py: 3 }}>
        How It Works
      </Text>
      <Text as="p">
        Trick or Treaters see a sign in front of the house that tells them we
        are making donations instead of giving away candy. They or their
        chaperones can scan a QR code that points to a website. They click the
        ‘I Was Here’ button to record their check-in. For every check-in, we
        make a ${CONFIG.CHARITY.AMOUNT} donation to{" "}
        <a href={CONFIG.CHARITY.URL}>{CONFIG.CHARITY.NAME}</a>, up to $
        {CONFIG.CHARITY.AMOUNT * CONFIG.CHARITY.MAX}.
      </Text>
      <Text as="h2" sx={{ py: 3 }}>
        About This Project
      </Text>
      <Text as="p">
        My family and I came up with this idea over dinner while trying to come
        up with ideas for what to do on Halloween this year. Read more about it
        on <a href="https://johnpolacek.com/trick-or-treat-it-forward">my website</a>. The source code is up{" "}
        <a href="https://github.com/johnpolacek/trick-or-treat-it-forward">
          on Github
        </a>{" "}
        if you want to make your own.
      </Text>
      <Text as="p">Pictures coming soon!</Text>
    </Box>
  </Box>
)

export default About
