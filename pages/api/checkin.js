import createCheckin from "../../firebase/createCheckin"

export default async (req, res) => {
  const debug = true

  if (req.method === "POST") {
    const demo = req.body.demo
    const who = req.body.who

    try {
      const createResponse = await createCheckin(who, demo)
      res.status(200).json(createResponse)
    } catch (e) {
      res.status(500).json({ statusCode: 500, message: e.message })
    }
  } else {
    res.status(405).end("Method Not Allowed")
  }
}
