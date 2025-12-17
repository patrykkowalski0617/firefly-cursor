import { useChromeStorage } from '../../hooks/useChromeStorage';
import SliderTemplate from './SliderTemplate';

const SliderClickIntensity = () => {
  const [clickIntensity, setClickIntensity] = useChromeStorage(
    'clickIntensity',
    50
  );
  return (
    <>
      <SliderTemplate
        id="clickIntensity"
        label="Click Intensity"
        min={1}
        max={100}
        value={clickIntensity}
        gradient="linear-gradient(to right, #cfcfcf, #d29d52)"
        onChange={(e) => setClickIntensity(Number(e.target.value))}
      />
    </>
  );
};
export default SliderClickIntensity;
