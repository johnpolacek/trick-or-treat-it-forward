import CONFIG from "../../../app.config.js"
import React, { useState } from "react"
import Form from "./Form"
import { Flex, Card, Text, Label, Input, Link } from "theme-ui"

const CheckinForm = ({ onCheckin, demo }) => {
  const [who, setWho] = useState("")
  const [checkedIn, setCheckedIn] = useState(false)

  const handleSubmit = async () => {
    fetch("/api/checkin", {
      method: "POST",
      // eslint-disable-next-line no-undef
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ who, demo }),
    })
      .then((response) => response.json())
      .then((result) => {
        setCheckedIn(true)
        onCheckin()
      })
  }

  return (
    <>
      {checkedIn ? (
        <Flex sx={{ justifyContent: "center", width: "100%" }}>
          <Card sx={{ maxWidth: "640px", mx: "auto" }}>
            <Text
              sx={{
                fontSize: [2, 3],
                fontWeight: "bold",
                color: "secondary",
                pb: 3,
              }}
            >
              Thanks {who}!
            </Text>
            <Text sx={{ fontSize: [0, 1] }}>
              If you’d like to make your own donation to {CONFIG.CHARITY.NAME},
              head on over to{" "}
            </Text>
            <Link
              href={CONFIG.CHARITY.DONATE_URL}
              sx={{
                display: "block",
                pt: 2,
                fontSize: [1, 2],
                color: "secondary",
              }}
            >
              {CONFIG.CHARITY.URL_PRETTY}
            </Link>
          </Card>
        </Flex>
      ) : (
        <Form onSubmit={handleSubmit} buttonText="I Was Here" id="CheckinForm">
          <Label htmlFor="who">What’s your name?</Label>
          <Input
            name="who"
            type="who"
            required="required"
            onChange={(e) => setWho(e.target.value)}
            value={who}
          />
        </Form>
      )}
    </>
  )
}

export default CheckinForm
