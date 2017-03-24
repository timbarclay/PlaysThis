const jimp = require("jimp");
const fs = require("fs");

const imageDir = `${__dirname}/images`;
const supportedImages = ["jpg", "jpeg", "png"];
const excludes = ["404.jpg", "main-image.jpg"];
const normalImgWidths = [770, 440];
const leadImgSizes = [570, 370];
const thumbnailHeightFactor = 0.75;

// little array helper method
Array.prototype.contains = function(item){
  return this.indexOf(item) >= 0;
}

let files = fs.readdirSync(imageDir);

// Uncomment this to limit the number it runs through. Like for testing or whatever
//files = files.slice(0, 20);

files.forEach(f => {
  const parts = f.split(".");
  if(parts.length > 2) return; // This is a resize version already

  const extension = parts[parts.length - 1];
  if(!supportedImages.contains(extension.toLowerCase()) || excludes.contains(f)) return; // This is an unsupported or excluded image

  const filename = parts[0];
  const isLead = filename[filename.length - 1] === "1";

  // Check for resized versions of this image we've already got
  const existingSizes = files
    .map(file => file.split("."))
    .filter(fileParts => fileParts.length > 2 && fileParts[0].toLowerCase() === filename.toLowerCase())
    .map(fileParts => +fileParts[1]);

  // Check what sizes still need to be made
  const sizesNeeded = (!isLead ? normalImgWidths : normalImgWidths.concat(leadImgSizes))
    .filter(s => !existingSizes.contains(s));

  console.log(`file: ${f}, existingSizes: ${existingSizes.join(",")}, sizesNeeded: ${sizesNeeded.join(",")}`);
  
  if(!sizesNeeded.length) {
    // No new sizes are needed of this image
    return;
  } 
  
  sizesNeeded.forEach(width => {
    jimp.read(`${imageDir}/${f}`)
      .then(image => {
        console.log(`Generating ${width} width version of ${filename}...`);
        return image.clone().autocrop();
      })
      .then(image => image.resize(width, jimp.AUTO))
      // If it's the lead image, we'll also cut it to the right shape
      .then(image => isLead ? image.cover(width, width * thumbnailHeightFactor, jimp.HORIZONTAL_ALIGN_CENTER | jimp.VERTICAL_ALIGN_TOP) : image)
      .then(image => image.quality(80))
      .then(image => image.write(makeFileName(imageDir, filename.toLowerCase(), width, "jpg")))
      .catch(err => console.error(err))
  });
});

function makeFileName(dir, filename, size, ext){
  return `${dir}/${filename}.${size}.${ext}`;
}