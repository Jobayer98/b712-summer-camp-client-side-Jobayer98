import Card from "../../../components/UI/Card/Card";
import useFetch from "../../../hooks/useFetch";

const PopularClasses = () => {
  const [data] = useFetch(
    "https://b7a12-summer-camp-server-side-jobayer981.vercel.app/allcourses"
  );
  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl mb-6">Popular Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-6">
        {data.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
