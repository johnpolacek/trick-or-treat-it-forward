import React, { useState, useEffect } from "react"
import { Box, Text, Button, Link, Image } from "theme-ui"
import CheckinForm from "../ui/forms/CheckinForm"

const Index = (props) => {
  const MAX_DONATIONS = 20
  const DONATION_AMOUNT = 5
  const [count, setCount] = useState(null)

  useEffect(() => {
    fetch("/api/count", {
      method: "GET",
      // eslint-disable-next-line no-undef
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => {
        setCount(data.count)
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
      <Image src="cat.svg" sx={{ height: "72px" }} />
      <Text as="h1" sx={{ fontSize: [3, 4], pb: [3, 4], color: "black" }}>
        Trick or Treat It Forward
      </Text>
      <Text sx={{ fontSize: [1, 2], pb: 3 }}>
        Halloween is tricky this year.
      </Text>
      <Text sx={{ fontSize: [0, 1], maxWidth: "960px", mx: "auto" }}>
        Instead of passing out treats, we’re making a $5 donation to{" "}
        <Link
          sx={{ color: "black", fontWeight: "bold" }}
          href="https://www.lakeviewpantry.org/"
        >
          Lakeview Pantry
        </Link>
        , Chicago’s largest food pantry, for every trick or treater who checks
        in at our house (up&nbsp;to&nbsp;$200).
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
        {count} Checkins so far…{" "}
        {count === MAX_DONATIONS
          ? "we’ve hit our goal of " + MAX_DONATIONS * DONATION_AMOUNT
          : "that’s $" + count * DONATION_AMOUNT + "!"}
      </Text>
      <CheckinForm
        onCheckin={() => {
          if (count + 1 < MAX_DONATIONS) {
            setCount(count + 1)
          }
        }}
      />
    </Box>
  )
}

export default Index
