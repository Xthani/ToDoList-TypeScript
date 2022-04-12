import './App.css';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import { useAppSelector } from './hooks';

function App() {
  const { user } = useAppSelector((state: any) => state.todos);

  return (
    <>
      <div className='wrapper'>
        <Header />
        {!!user ? <Page /> : <RegistrationForm />}
      </div>
    </>
  );
}

export default App;