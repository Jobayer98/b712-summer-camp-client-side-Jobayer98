import test from "../../../assets/mission/test.png";
import education from "../../../assets/mission/online-education.png";
import student from "../../../assets/mission/student.png";
import "./Mission.css";
const Mission = () => {
  return (
    <div className="mission h-[400px] lg:h-[650px] lg:mt-52 relative">
      <div className="w-[60%] h-[400px] hidden lg:block mx-auto z-10 -top-40 left-96 absolute">
        <img
          loading="lazy"
          src="https://lanecove.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2017/08/04230359/Spanish-for-kids-Sydney-and-Melbourne.jpg"
          alt=""
        />
      </div>
      <div className="max-w-[60%] mx-auto lg:pt-[250px]">
        <div>
          <h1>Our Mission is communicate and speak fluently</h1>
          <p>
            There are many variations of passages of lore ipsum available but
            the majority have suffered.
          </p>
        </div>
        <div className="flex justify-center items-center gap-12">
          <MissionCard img={test} para={680} des="Pro Teachers" />
          <MissionCard img={education} para={840} des="Language Courses" />
          <MissionCard img={student} para={2300} des="Students Enrolled" />
        </div>
      </div>
    </div>
  );
};

export default Mission;

const MissionCard = ({ img, para, des }) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-black lg:w-[90%] py-8 rounded">
      <img
        className="h-16 hover:scale-90 transition-all ease-linear duration-200"
        src={img}
        alt="png"
      />
      <p className="text-white text-2xl font-bold">{para}</p>
      <p className="text-gray-400">{des}</p>
    </div>
  );
};
