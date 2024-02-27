import Jimp from "jimp";

async function ImageEffect({ title = "Calvary" }: { title?: string }) {
  const jimpImage = await Jimp.read(
    "https://i.kym-cdn.com/entries/icons/facebook/000/031/003/cover3.jpg"
  );
  const jimpFont = await Jimp.loadFont(
    "https://raw.githubusercontent.com/jimp-dev/jimp/main/packages/plugin-print/fonts/open-sans/open-sans-32-white/open-sans-32-white.fnt"
  );

  jimpImage.posterize(9);
  jimpImage.contrast(0.1);
  jimpImage.brightness(-0.3);

  jimpImage.print(jimpFont, 270, 300, title);
  const image = await jimpImage.getBase64Async(Jimp.MIME_JPEG);

  return (
    <img
      className="transformedImage"
      src={image}
      alt="Transformed"
      width={500}
    />
  );
}

export default ImageEffect;
