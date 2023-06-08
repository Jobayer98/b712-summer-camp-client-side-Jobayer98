import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/shared/Container";
import Explore from "./Explore/Explore";
import PopularClasses from "./PopClass/PopularClass";
import PopularIns from "./PopInstructor/PopularIns";
import PopularLang from "./PopLanguage/PopularLang";
const HomePage = () => {
  return (
    <Container>
      <Carousel />
      <PopularClasses />
      <PopularIns />
      <PopularLang />
      <Explore />
    </Container>
  );
};

export default HomePage;
