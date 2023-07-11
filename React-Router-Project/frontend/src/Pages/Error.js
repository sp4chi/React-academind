import PageContent from '../components/PageContent';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  //server error
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  //for not supported path
  if (error.status === 404) {
    title = 'Not found';
    message = 'Could not find resource or page';
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
};

export default ErrorPage;
