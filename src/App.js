import './App.css';

import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="card">
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
