import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/shared/Container";
import Category from "./Category/Category";
import Instructions from "./Instructions/Instructions";
import Mission from "./Mission/Mission";
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
      <Mission />
      <PopularIns />
    </>
  );
};

export default HomePage;
