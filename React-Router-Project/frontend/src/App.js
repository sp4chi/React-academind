// Challenge / Exercise
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Events, { loader as eventsLoader } from './Pages/Events';
import Home from './Pages/Home';
import Root from './Pages/Root';
import NewEvent, { action as newEventAction } from './Pages/NewEvent';
import EventDetail, { loader as eventDetailLoader } from './Pages/EventDetail';
import EditEvent from './Pages/EditEvent';
import EventsNavigationLayout from './Pages/EventsNavigationLayout';
import ErrorPage from './Pages/Error';

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
//DONE
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
//DONE
// 3. Add a root layout that adds the <MainNavigation> component above all page components
//DONE
// 4. Add properly working links to the MainNavigation
//DONE
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
//DONE
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
//DONE

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'events',
          element: <EventsNavigationLayout />,
          children: [
            {
              index: true,
              element: <Events />,
              loader: eventsLoader,
            },
            {
              path: ':eventId',
              id: 'event-detail',
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetail />,
                },
                { path: 'edit', element: <EditEvent /> },
              ],
            },
            { path: 'new', element: <NewEvent />, action: newEventAction },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
