import {
  Hero,
  Popular,
  Services,
  Footer,
  CustomerReviews,
  Subscribe,
  SpecialOffer,
  SupremeQuality,} from './sections/index.js';
import Nav from './components/Nav.jsx'
  
const App = () =>  (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-1 wide:padding-r pading-b">
        <Hero/>
      </section>
      <section className="padding" >
        <Popular/> 
      </section>
      <section className="padding" >
       <SupremeQuality/>
      </section>
      <section className="padding-x py-10" >
        <Services/>
      </section>
      <section className="padding" >
        <SpecialOffer/>
      </section>
      <section className=" bg-pale-blue padding" >
        <CustomerReviews/> 
      </section>
      <section className="padding-x sm:py-32 py-16 w-full" >
        <Subscribe/> 
      </section>
      <section className="bg-black padding-x padding-t pb-8" >
        <Footer/>
      </section>
    </main>
);

export default App