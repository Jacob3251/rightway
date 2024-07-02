// import Test from "../components/Home/Test/Test";
import DefaultLayout from "../layouts/DefaultLayout";
import Hero from "../components/Home/Hero/Hero";
import About from "../components/Home/About/About";
import Contact from "../components/Home/Contact/Contact";
import Gallery from "../components/Home/Gallery/Gallery";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import Explore from "../components/Home/Explore_Uni/Explore";

function Home() {
  return (
    <DefaultLayout>
      {/* <Test></Test> */}
      <Hero></Hero>
      <Explore></Explore>
      <Gallery></Gallery>
      <About></About>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </DefaultLayout>
  );
}

export default Home;
