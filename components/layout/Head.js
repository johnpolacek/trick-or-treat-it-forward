import Head from "next/head"
import PropTypes from "prop-types"

const DocHead = (props) => (
  <>
    <Head>
      <title>Trick or Treat It Forward</title>
      <meta
        name="description"
        content="Halloween is tricky this year. Instead of passing out treats we are making donations."
      />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={props.url} />
    </Head>
  </>
)

export default DocHead
