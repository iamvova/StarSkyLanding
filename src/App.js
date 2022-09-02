import './App.css';
import  { Contacts, Feedback, Gallery, Main, Price, Propose, SmallForm, Statistic, WhySteli} from './container'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease-out', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
});

function App() {
  return (
    <div>
      <Main />
      <Propose />
      <SmallForm />
      <WhySteli />
      <Statistic />
      <Price />
      <Gallery />
      <Feedback />
      <Contacts />
    </div>
  );
}

export default App;
