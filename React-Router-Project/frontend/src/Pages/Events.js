import { Link } from 'react-router-dom';
import NewEvent from './NewEvent';
import EventDetail from './EventDetail';

const DUMMY = [
  { id: 'e1', title: 'Event 1' },
  { id: 'e2', title: 'Event 2' },
  { id: 'e3', title: 'Event 3' },
  { id: 'e4', title: 'Event 4' },
];

const EventsPage = () => {
  return (
    <>
      <Link to="new">
        <NewEvent />
      </Link>
      <ul>
        {DUMMY.map((event) => (
          <li key={event.key}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
