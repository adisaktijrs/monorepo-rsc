import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Content } from "antd/es/layout/layout";

// import Jimp from "jimp"; // bug https://github.com/jimp-dev/jimp/issues/846 then use the solution below
// but they dont export the type
import "jimp";
declare const Jimp: any; // AHAHHAAH

const SuspensePage = () => {
  const searchParams = useSearchParams();

  const name = searchParams.get("s") ?? "Calvary";
  const [image, setImage] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      const jimpImage = await Jimp.read(
        "https://i.kym-cdn.com/entries/icons/facebook/000/031/003/cover3.jpg"
      );
      const jimpFont = await Jimp.loadFont(
        "https://raw.githubusercontent.com/jimp-dev/jimp/main/packages/plugin-print/fonts/open-sans/open-sans-32-white/open-sans-32-white.fnt"
      );

      jimpImage.posterize(9);
      jimpImage.contrast(0.1);
      jimpImage.brightness(-0.3);

      jimpImage.print(jimpFont, 270, 300, name);
      const image = await jimpImage.getBase64Async(Jimp.MIME_JPEG);
      setImage(image);
    };

    loadImage();
  }, [name]);

  return (
    <Content
      style={{
        padding: 24,
        margin: 16,
        background: "white",
      }}
    >
      <p>Image generator</p>
      {image && (
        <img
          className="transformedImage"
          src={image}
          alt="Transformed"
          width={500}
        />
      )}
    </Content>
  );
};

export default SuspensePage;
