import Calendario from "./Calendario/Calendario";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Corpo() {
    return (
        <div>
            <Calendario />
            <Calendar calendarType="US" />
        </div>
    )
}

export default Corpo;