import { useChromeStorage } from '../../hooks/useChromeStorage';
import SliderTemplate from './SliderTemplate';

const SliderMicroMotion = () => {
  const [microMotion, setMicroMotion] = useChromeStorage('microMotion', 50);
  return (
    <>
      <SliderTemplate
        id="microMotion"
        label="Micro Motion Range"
        min={0}
        max={50}
        value={microMotion}
        gradient="linear-gradient(to right, #cfcfcf, #6587ff)"
        onChange={(e) => setMicroMotion(Number(e.target.value))}
      />
    </>
  );
};
export default SliderMicroMotion;
