import {mouthData} from '../../data';
import { useSettings } from "../../context/setting-context";


const MouthSelector:React.FC = () => {
  const { setSetting } = useSettings();


	return (
		<div className="items">
			{mouthData.map(mouth =>
				<img
					className='item'
					key={mouth.id}
					src={mouth.image}
					onClick={() => setSetting({ mouth: mouth.id })}
					/>
			)}
		</div>
	);
}

export default MouthSelector;