import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();

  // if (events.isError) {
  //   return <p>{events.message}</p>;
  // }

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    if (!response.ok) {
      //ERROR HANDLING - 1
      // return {
      //   isError: true,
      //   message: 'Could not fetch events',
      // };
      //ERROR HANDLING - 2
      throw new Error('Could not fetch events');
    }
  } else {
    //const resData = await response.json();
    return response;
  }
}
