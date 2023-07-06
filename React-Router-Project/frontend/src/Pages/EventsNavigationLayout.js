import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

const EventsNavigationLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventsNavigationLayout;
