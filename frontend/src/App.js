import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Main from './components/main/main.component';

import HomePage from './pages/homepage.component';

function App() {
  return (
    <>
      <Header />
      <Main>
        <HomePage />
      </Main>
      <Footer />
    </>
  );
}

export default App;
