import Link from "next/link"
import { Image, Text } from "theme-ui"

const Header = (props) => (
  <>
    <Image src="cat.svg" sx={{ height: "72px" }} />
    <Link href="/">
      <Text
        as="h1"
        sx={{ fontSize: [3, 4], pb: [3, 4], color: "black", cursor: "pointer" }}
      >
        Trick or Treat It Forward
      </Text>
    </Link>
    <Text as="h2" sx={{ fontSize: [1, 2], pb: 3, fontWeight: "normal" }}>
      Halloween is tricky this year.
    </Text>
  </>
)

export default Header
