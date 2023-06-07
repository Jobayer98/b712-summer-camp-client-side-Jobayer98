const Container = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-10 xl:px-20">
      {children}
    </div>
  );
};

export default Container;
