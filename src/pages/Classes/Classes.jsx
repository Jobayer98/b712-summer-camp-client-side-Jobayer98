// import { Link } from "react-router-dom";
import { useEffect } from "react";
import Container from "../../components/shared/Container";
import useFetch from "../../hooks/useFetch";
import Aos from "aos";

import Card from "../../components/UI/Card/Card";

const Classes = () => {
  const [data] = useFetch(
    "https://b7a12-summer-camp-server-side-jobayer981.vercel.app/allcourses"
  );

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 self-center content-center my-12">
        {data.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Classes;
