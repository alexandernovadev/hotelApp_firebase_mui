// import reactLogo from './assets/react.svg'
import './App.css'
// import { useTranslation } from 'react-i18next';
import { AppTheme } from './theme';
import { AppRouter } from './router/AppRouter';



function App() {
  // const { t, i18n } = useTranslation();
  // <h1>{t('COMMON.SEND')}</h1>

  return (
    <>
    <AppTheme>
      <AppRouter />
    </AppTheme>
  </>
  )
}

export default App
