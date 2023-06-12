import Container from "../../../components/shared/Container";
const Category = () => {
  const category = [1, 2, 3, 4];
  return (
    <Container>
      <div className="flex justify-center gap-6 my-16">
        {category.map((i) => (
          <div
            key={i}
            className="w-[210px] h-[280px] shadow border-[1px] flex flex-col justify-evenly items-center rounded-md"
          >
            <figure>
              <img
                className="h-28 w-28 rounded-full"
                src="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?cs=srgb&dl=pexels-dominika-gregu%C5%A1ov%C3%A1-672532.jpg&fm=jpg"
                alt=""
              />
            </figure>
            <div className="text-center">
              <h2 className="font-semibold text-gray-600">Japanese</h2>
              <p className="text-xs mt-2 text-gray-400">4 hours course time</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Category;
