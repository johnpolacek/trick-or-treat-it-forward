import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Flex, Box, Card, Heading, Text, Button } from "theme-ui"
import Spinner from "../graphics/Spinner"

const Form = (props) => {
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // if the controller had an error, allow submit after error is fixed
    setIsSubmitting(false)
  }, [props.error])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)
    try {
      props.onSubmit()
    } catch (err) {
      setError(err.message)
      setIsSubmitting(false)
    }
  }

  const disabled =
    isSubmitting || (typeof props.enabled !== "undefined" && !props.enabled)

  const ErrorMessage = (props) => (
    <Text as="p" sx={{ pb: 3, maxWidth: "300px" }} color="red">
      {props.children}
    </Text>
  )

  return (
    <Flex sx={{ justifyContent: "center", width: "100%" }}>
      <Card id={props.id} as="form" onSubmit={handleSubmit}>
        {props.children}
        {error !== "" && <ErrorMessage children={{ error }} />}
        {props.error !== "" && <ErrorMessage children={props.error} />}
        <Button
          variant="large"
          sx={{ width: "100%", mt: 2, bg: disabled ? "gray" : "secondary" }}
          disabled={disabled}
          type="submit"
        >
          {isSubmitting ? <Spinner /> : props.buttonText}
        </Button>
      </Card>
    </Flex>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  enabled: PropTypes.bool,
  error: PropTypes.string,
}

export default Form
