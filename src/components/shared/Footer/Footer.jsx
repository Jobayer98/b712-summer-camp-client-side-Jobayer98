import brand from "../../../assets/languages.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer px-6 py-10 bg-base-200 text-base-content max-w-[1920px] mx-auto md:px-8 lg:px-12 2xl:px-44 gird grid-cols-2 lg:grid-cols-4">
        <div>
          <img className="h-10" src={brand} alt="logo" />
          <p>
            Global Speak
            <br />
            Teaching the global language
          </p>
        </div>
        <div className="px-6">
          <span className="footer-title">Popular Language</span>
          <a className="link link-hover">English</a>
          <a className="link link-hover">German</a>
          <a className="link link-hover">Japanese</a>
          <a className="link link-hover">French</a>
        </div>
        <div className="px-6">
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div className="sm:hidden lg:block">
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80 ">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>Copyright © 2023 - All right reserved by Global Speak</p>
      </div>
    </footer>
  );
};

export default Footer;
