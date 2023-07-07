// Challenge / Exercise
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Events from './Pages/Events';
import Home from './Pages/Home';
import Root from './Pages/Root';
import NewEvent from './Pages/NewEvent';
import EventDetail from './Pages/EventDetail';
import EditEvent from './Pages/EditEvent';
import EventsNavigationLayout from './Pages/EventsNavigationLayout';

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
      children: [
        { index: true, element: <Home /> },
        {
          path: 'events',
          element: <EventsNavigationLayout />,
          children: [
            {
              index: true,
              element: <Events />,
              loader: async () => {
                const response = await fetch('http://localhost:8080/events');

                if (!response.ok) {
                  //
                } else {
                  const resData = await response.json();
                  return resData;
                }
              },
            },
            { path: 'new', element: <NewEvent /> },
            { path: ':eventId', element: <EventDetail /> },
            { path: ':eventId/edit', element: <EditEvent /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
