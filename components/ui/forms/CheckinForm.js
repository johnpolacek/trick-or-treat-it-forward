import React, { useState } from "react"
import Form from "./Form"
import { Flex, Card, Text, Label, Input, Link } from "theme-ui"

const CheckinForm = ({ onCheckin }) => {
  const [who, setWho] = useState("")
  const [checkedIn, setCheckedIn] = useState(false)

  const handleSubmit = async () => {
    fetch("/api/checkin", {
      method: "POST",
      // eslint-disable-next-line no-undef
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ who }),
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
                fontSize: 3,
                fontWeight: "bold",
                color: "secondary",
                pb: 3,
              }}
            >
              Thanks {who}!
            </Text>
            <Text>
              If you’d like to make your own donation to Lakeview Pantry, head
              on over to{" "}
            </Text>
            <Link
              href="https://www.lakeviewpantry.org/donate/"
              sx={{ display: "block", pt: 2, fontSize: 2, color: "secondary" }}
            >
              chicagosfoodbank.org
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
