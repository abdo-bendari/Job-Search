import express from "express"
import { bootstrap } from "./src/modules/bootstrap.js"
const app = express()
const port = process.env.PORT || 3000

bootstrap(app,express)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))