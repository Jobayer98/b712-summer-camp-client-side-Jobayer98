import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/shared/Container";
import Explore from "./Explore/Explore";
import PopularClasses from "./PopClass/PopularClass";
import PopularIns from "./PopInstructor/PopularIns";
const HomePage = () => {
  return (
    <Container>
      <Carousel />
      <PopularClasses />
      <PopularIns />
      <Explore />
    </Container>
  );
};

export default HomePage;
