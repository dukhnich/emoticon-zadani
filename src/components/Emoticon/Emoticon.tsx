import "./style.css";

import { useSettings } from "../../context/setting-context";
import { colorsData } from "../../data";

const Emoticon: React.FC = () => {
  const { eyes, mouth, color } = useSettings();

  return (
    <div
      className="emoticon"
      style={{
        backgroundColor:
          colorsData.find((colorObj) => colorObj.id === color)?.value || "red",
      }}
    >
      <img className="emoticon__eyes" src={`src/img/eyes${eyes}.svg`} />
      <img className="emoticon__mouth" src={`src/img/mouth${mouth}.svg`} />
    </div>
  );
};

export default Emoticon;
