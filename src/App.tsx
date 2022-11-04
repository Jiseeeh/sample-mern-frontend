import Navbar from "./Navbar";
import illustration from "./assets/illustration.svg";
import Form from "./Form";

function App() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Navbar />
      <img
        className="my-5 sm:max-w-md aspect-[3/3]"
        src={illustration}
        alt="illustration of people having a conversation"
      />
      <Form />
    </main>
  );
}

export default App;
