import Nav from "./components/Nav"
import { Features, Footer, Hero, Steps, Subscribe, Testimonials} from "./sections"

const App = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r">
        <Hero/>
      </section>
      <section className="padding">
        <Features/>
      </section>
      <section className="padding-x py-10">
        <Steps/>
      </section>
      <section className="padding bg-zinc-700">
        <Testimonials/>
      </section>
      <section className="padding">
        <Subscribe/>
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  )
}

export default App;