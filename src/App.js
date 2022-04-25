import MainFooter from './containers/main-footer/main-footer';
import MainHeader from './containers/main-header/main-header';
import { Box, Container, CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { appRoute } from './routes';


function App() {
  const routes = useRoutes(appRoute);

  return (<>
    <CssBaseline />
    <Box display='flex' minHeight='100vh' flexDirection='column'>
      <MainHeader />
      <Box flex={1}>
        <Container >
          {routes}
        </Container>
      </Box>
      <MainFooter />
    </Box>
  </>);
}

export default App;
