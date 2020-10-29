import CONFIG from "../../app.config.js"
import React, { useState, useEffect } from "react"
import { Box, Text, Button, Image } from "theme-ui"
import Header from "../ui/Header"
import CheckinForm from "../ui/forms/CheckinForm"

const Index = (props) => {
  const [count, setCount] = useState(null)

  useEffect(() => {
    fetch("/api/count", {
      method: "POST",
      // eslint-disable-next-line no-undef
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ demo: CONFIG.DEMO }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCount(CONFIG.DEMO ? data.count % CONFIG.DONATIONS.MAX : data.count)
      })
  }, [])

  return (
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
      <Text sx={{ fontSize: [0, 1], maxWidth: "960px", mx: "auto" }}>
        Instead of passing out treats, we’re making a ${CONFIG.DONATIONS.AMOUNT}{" "}
        donation to{" "}
        <a
          sx={{ color: "black", fontWeight: "bold" }}
          href={CONFIG.CHARITY.URL}
        >
          {CONFIG.CHARITY.NAME}
        </a>
        {CONFIG.CHARITY.DESC && ", " + CONFIG.CHARITY.DESC + " "}
        for every trick or treater who checks in at our house (up&nbsp;to&nbsp;$
        {CONFIG.DONATIONS.AMOUNT * CONFIG.DONATIONS.MAX}).
      </Text>
      <Text
        sx={{
          fontSize: [0, 1],
          fontStyle: "italic",
          pt: 2,
          pb: [3, 4],
          fontWeight: "bold",
          opacity: count === null ? 0 : 1,
        }}
      >
        {count} Checkin{count > 1 && "s"} so far…{" "}
        {count === CONFIG.DONATIONS.MAX
          ? "we’ve hit our goal of " +
            CONFIG.DONATIONS.MAX * CONFIG.DONATIONS.AMOUNT
          : "that’s $" + count * CONFIG.DONATIONS.AMOUNT + "!"}
      </Text>
      <CheckinForm
        demo={CONFIG.DEMO}
        onCheckin={() => {
          if (count + 1 < CONFIG.DONATIONS.MAX) {
            setCount(count + 1)
          }
        }}
      />
      {CONFIG.DEMO && (
        <Text sx={{ pt: 3, fontStyle: "italic" }}>
          Note: This is in Demo Mode
        </Text>
      )}
    </Box>
  )
}

export default Index
