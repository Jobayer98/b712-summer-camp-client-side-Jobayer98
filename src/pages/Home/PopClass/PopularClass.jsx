import Card from "../../../components/UI/Card/Card";
import useFetch from "../../../hooks/useFetch";

const PopularClasses = () => {
  const [data] = useFetch(
    "https://b7a12-summer-camp-server-side-jobayer981.vercel.app/allcourses"
  );
  return (
    <div className="bg-[#eff2f5] py-16 mt-12">
      <div className="max-w-screen-2xl mx-auto md:mx-8">
        <h1 className="text-center text-4xl font-semibold mb-10">
          Popular Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-6">
          {data.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
