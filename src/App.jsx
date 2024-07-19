import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Whatsapp from "./Components/Whatsapp/Whatsapp";

const App = ({ children }) => {
  return (
    <main>
      <Navbar />

      {children}
      <Whatsapp />
      <Footer />
    </main>
  );
};

export default App;
