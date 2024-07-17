const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/", (req, res) => {
  res.send("헤헤헤 내가 배포한 사이트")
})

app.listen(3000, (req, res) => {
  console.log("server on");
})