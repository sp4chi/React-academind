import { json } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetail = () => {
  return <EventItem />;
};
export default EventDetail;

export const loader = async ({ request, params }) => {
  const id = params.eventsId;
  const response = await fetch('http://localhost:8080/events/' + id);
  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  }
  return response;
};
