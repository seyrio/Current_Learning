const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const { mergePdf } = require("./merger");
const upload = multer({ dest: "uploads/" });
app.use("/static", express.static("public"));
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/templates/index.html"));
});

app.post("/merge", upload.array("pdf", 2), async function (req, res, next) {
  let d = await mergePdf(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  res.redirect(`http://localhost:3000/static/${d}.pdf`);
});

app.listen(port, () => {
  console.log(`PDF Merger listening on port http://localhost:${port}`);
});
