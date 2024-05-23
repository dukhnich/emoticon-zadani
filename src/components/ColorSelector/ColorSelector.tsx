import { colorsData } from "../../data";
import { useSettings } from "../../context/setting-context";

const ColorSelector: React.FC = () => {
  const { setSetting } = useSettings();

  return (
    <div className="items">
      {colorsData.map((color) => (
        <div
          className="item"
          key={color.id}
          style={{ backgroundColor: color.value }}
          onClick={() => setSetting({ color: color.id })}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
