import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetail = () => {
  const data = useRouteLoaderData('event-detail');

  return <EventItem event={data.event} />;
};
export default EventDetail;

export const loader = async ({ request, params }) => {
  const { eventId } = params;

  const response = await fetch('http://localhost:8080/events/' + eventId);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};

export const action = async ({ request, params }) => {
  const { eventId } = params;
  console.log(eventId);
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
    //another way of configuring
    //method: 'DELETE',
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete event.' },
      {
        status: 500,
      }
    );
  }
  return redirect('/events');
};
