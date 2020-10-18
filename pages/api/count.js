import getCount from "../../firebase/getCount"

export default async (req, res) => {
  const debug = true

  if (req.method === "POST") {
    try {
      const demo = req.body.demo
      const countResponse = await getCount(demo)
      res.status(200).json(countResponse)
    } catch (e) {
      res.status(500).json({ statusCode: 500, message: e.message })
    }
  } else {
    res.status(405).end("Method Not Allowed")
  }
}
