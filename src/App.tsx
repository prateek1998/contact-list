import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import ContactApp from './components/contact-list';

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ContactApp />
      <Footer />
    </div>
  )
}

export default App
