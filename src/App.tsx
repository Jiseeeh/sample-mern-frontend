import Navbar from "./Navbar";
import Form from "./Form";
import Card from "./Card";

function App() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Navbar />
      <Form />
      <section className="mb-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
        <Card title="Short Title" body="Short Body" />
        <Card title="Short Title" body="Short Body" />
        <Card title="Short Title" body="Short Body" />
        <Card
          title="Long Title Long Long Long Long Long Long Long Long Long Long "
          body="Long Body Long Body Long Body Long Body Long Body Long Body"
        />
      </section>
    </main>
  );
}

export default App;
