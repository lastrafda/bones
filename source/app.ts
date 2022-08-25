import express, { Express, Request, Response } from "express"

import config from "config"
const port: number = config.get("port")
const app: Express = express()

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Servers")
})

app.listen(port, () => {
  console.log(`Servers running at http://localhost:${port}`)
})
