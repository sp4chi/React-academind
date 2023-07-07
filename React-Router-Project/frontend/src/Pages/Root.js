import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';

const Root = () => {
  //const navigation = useNavigation();

  // if (navigation.state === 'loading') {
  //   return (
  //     <p
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'center',
  //       }}
  //     >
  //       Loading....
  //     </p>
  //   );
  // }

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
