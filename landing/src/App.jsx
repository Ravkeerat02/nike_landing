import {
  Hero,
  Footer,
  CustomerReveiw,
  PopularProduct,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Services,
  ContactUs,
} from "./section";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReveiw />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <seciton className="padding-x sm:py-32 py-16 w-full">
        <ContactUs />
      </seciton>
      <section className="padding-x padding-t pb-8 bg-black ">
        <Footer />
      </section>
    </main>
  );
};

export default App;
