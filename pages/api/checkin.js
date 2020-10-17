import createCheckin from "../../firebase/createCheckin"

export default async (req, res) => {
  const debug = true

  if (req.method === "POST") {
    const who = req.body.who
    const when = Date.now()

    try {
      const createResponse = await createCheckin({ who, when })
      res.status(200).json(createResponse)
    } catch (e) {
      res.status(500).json({ statusCode: 500, message: e.message })
    }
  } else {
    res.status(405).end("Method Not Allowed")
  }
}
