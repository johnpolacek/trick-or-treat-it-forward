import React, { useContext, useEffect } from "react"
import PropTypes from "prop-types"
import Head from "./Head"
import Style from "./Style"
import { Flex, Box, Link } from "theme-ui"
import Main from "../ui/containers/Main"
import Footer from "../ui/Footer"

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Flex
        sx={{
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <Main>{props.children}</Main>
        <Footer />
      </Flex>
      <Style />
    </>
  )
}

export default Layout
