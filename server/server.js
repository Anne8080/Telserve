import express from "express"
import fs from "fs"
import path from "path"
import App from "./seo.js"

const app = express();
const PORT = process.env.PORT || 8000;
app.use("/static",express.static(path.resolve(__dirname, "..", "build","static")))
app.get("*",(req, res, next) => {
    fs.readFile(path.resolve("../build/index.html"), "utf-8", ((err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).send("Some Error Occured")
        }
        const skeleton = App[req.path]
        if (skeleton) {
            data = data.replace(/%TITLE%/g, skeleton.title || "Telserve Networks")
            data = data.replace(/%DESCRIPTION%/, skeleton.description || App["/"].description)
        }
        // console.log(ReactDomServer.renderToString(<App req={req}/>))
        return res.send(data)
    }))
    // next()
})


app.listen(PORT, () => {
    console.log("App Launched on ", PORT)
})