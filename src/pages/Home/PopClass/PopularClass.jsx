import Card from "../../../components/UI/Card/Card";
import useFetch from "../../../hooks/useFetch";

const PopularClasses = () => {
  const [data] = useFetch("http://localhost:3000/classes");
  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl mb-6">Popular Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
        {data.map((item) => (
          <Card
            key={item._id}
            img={
              "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            }
            item={item}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
