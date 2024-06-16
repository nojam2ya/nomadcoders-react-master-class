import GlobalStyle from '@style/GlobalStyle';
import Routers from './Routers';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@src/style/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Routers />
      </ThemeProvider>
    </>
  );
}

export default App;
