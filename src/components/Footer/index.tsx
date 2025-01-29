import { ReactComponent as Logo } from "../../../public/imgs/Logo.svg";
import Button from "../Custom Components/Button";

const Footer = () => {
  return (
    <div
      className="text-white bg-[#202430] flex items-center justify-around gap-5"
      style={{ padding: "10px 50px" }}
    >
      {/* First section */}
      <section>
        <Logo className="w-20" />
        <p className="text-xs">
          Great platform for the job seeker that passionate about startups. Find
          your dream job easier.
        </p>
      </section>

      {/* Second Section */}
      <ul className="text-xs text-gray-400 flex flex-col gap-5">
        <li className="text-white">About</li>
        <li>Companies</li>
        <li>Pricing</li>
        <li>Terms</li>
        <li>Advice</li>
        <li>Privacy Policy</li>
      </ul>

      {/* Third Section */}
      <ul className="text-xs text-gray-400 flex flex-col gap-5">
        <li className="text-white">Resources</li>
        <li>Help Docs</li>
        <li>Guide</li>
        <li>Updates</li>
        <li>Contact Us</li>
      </ul>

      {/* Fourth Section */}
      <section className="flex flex-col gap-5">
        <h1 className="text-white">Get job notifications</h1>
        <p className="text-gray-400">
          The latest job news, articles, sent to your inbox weekly.
        </p>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Email Address"
            className="text-gray-600 bg-white outline-none"
            style={{ padding: "5px 10px" }}
          />
          <Button>Subscribe</Button>
        </div>
      </section>
    </div>
  );
};

export default Footer;
