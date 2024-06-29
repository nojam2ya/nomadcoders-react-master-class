import { hoursSelector, minuteState } from '@src/atoms';
import { useRecoilState } from 'recoil';

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hoursSelector);

  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        type="number"
        name="minutes"
        id="minutes"
        placeholder="Minutes"
        value={minutes}
        onChange={onMinutesChange}
      />
      <input
        type="number"
        name="hours"
        id="hours"
        placeholder="Hours"
        value={hours}
        onChange={onHoursChange}
      />
    </div>
  );
}

export default App;
