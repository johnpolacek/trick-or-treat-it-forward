import Link from "next/link"
import { Box } from "theme-ui"

const Footer = (props) => (
  <Box as="footer" sx={{ py: 6, textAlign: "center" }}>
    A project by <a href="https://johnpolacek.com/">John Polacek</a>. Read more{" "}
    <Link href="/about">about it</Link>. Code on{" "}
    <a href="https://github.com/johnpolacek/trick-or-treat-it-forward">
      Github
    </a>
    .
  </Box>
)

export default Footer
