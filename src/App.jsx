import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Whatsapp from "./Components/Whatsapp/Whatsapp";
import RoutesPages from "./routes/routes";

const App = () => {
  return (
    <>
    <Navbar />
    <main className="space-beetween">
      <RoutesPages/>
    </main>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default App;
