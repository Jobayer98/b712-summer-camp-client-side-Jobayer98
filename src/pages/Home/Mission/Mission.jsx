import test from "../../../assets/mission/test.png";
import education from "../../../assets/mission/online-education.png";
import student from "../../../assets/mission/student.png";
import "./Mission.css";
const Mission = () => {
  return (
    <div className="mission h-[400px] lg:h-[800px]">
      <div className="w-[60%] h-[400px] hidden mx-auto lg:flex justify-center mt-12">
        <img
          loading="lazy"
          src="https://lanecove.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2017/08/04230359/Spanish-for-kids-Sydney-and-Melbourne.jpg"
          alt=""
        />
      </div>

      <div className="max-w-[60%] mx-auto flex justify-center items-center gap-12 mt-20">
        <MissionCard img={test} para={680} des="Pro Teachers" />
        <MissionCard img={education} para={840} des="Language Courses" />
        <MissionCard img={student} para={2300} des="Students Enrolled" />
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
