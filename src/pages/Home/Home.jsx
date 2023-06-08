import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/shared/Container";
import PopularLang from "./PopLanguage/PopularLang";
const HomePage = () => {
  return (
    <Container>
      <Carousel />
      <PopularLang />
    </Container>
  );
};

export default HomePage;
