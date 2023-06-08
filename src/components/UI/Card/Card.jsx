const Card = ({ img, lang, prog }) => {
  return (
    <div className="border w-full shadow">
      <figure className="flex justify-center">
        <img className="w-96" src={img} alt="card_img" />
      </figure>
      <div className="px-4">
        <h1 className="text-xl my-3">{lang}</h1>
        <h1 className="text-xl mb-3">{prog}</h1>
      </div>
    </div>
  );
};

export default Card;
