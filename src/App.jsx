import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="w-full h-screen bg-[url(src/assets/images/background-pattern-mobile.svg)] md:bg-[url(src/assets/images/background-pattern-desktop.svg)] bg-center bg-cover bg-no-repeat flex items-center justify-center mx-auto px-4">
      <Accordion />
    </div>
  );
}

export default App;
