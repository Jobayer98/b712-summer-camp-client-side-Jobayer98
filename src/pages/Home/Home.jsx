import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/shared/Container";
import Category from "./Category/Category";
import Instructions from "./Instructions/Instructions";
import PopularClasses from "./PopClass/PopularClass";
import PopularIns from "./PopInstructor/PopularIns";
const HomePage = () => {
  return (
    <>
      <Carousel />
      <Container>
        <Category />
        <Instructions />
      </Container>
      <PopularClasses />
      <PopularIns />
    </>
  );
};

export default HomePage;
