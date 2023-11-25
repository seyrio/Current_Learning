const fs = require("fs");
const path = require("path");
const folder = __dirname;
const previous = "one";
const now = "two";

try {
  const data = fs.readdir(folder, (err, data) => {
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      const oldFile = path.join(folder, item);
      const newFile = path.join(folder, item.replaceAll(previous, now));
      if (oldFile !== newFile)
        fs.rename(oldFile, newFile, () => {
          console.log(`Successfully renamed from ${oldFile} to ${newFile}`);
        });
    }
  });
} catch (err) {
  console.error(err);
}
