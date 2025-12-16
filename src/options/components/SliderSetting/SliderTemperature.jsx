import { useChromeStorage } from '../../hooks/useChromeStorage';
import SliderSetting from './SliderSetting';

const SliderTemperature = () => {
  const [temperature, setTemperature] = useChromeStorage('temperature', 50);
  return (
    <>
      <SliderSetting
        id="colorSlider"
        label="Temperature"
        min={0}
        max={100}
        value={temperature}
        gradient="linear-gradient(to right, #4a90e2, #ffffff, #f39c12, #e74c3c)"
        onChange={(e) => setTemperature(Number(e.target.value))}
      />
    </>
  );
};
export default SliderTemperature;
