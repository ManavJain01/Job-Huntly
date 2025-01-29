import { default as Company } from "../components/Landing Page/Company/Desktop";

import { default as Category } from "../components/Landing Page/Category/Desktop";

import { default as CTA } from "../components/Landing Page/CTA/Desktop";

import { default as FeaturedJobs } from "../components/Landing Page/Featured Jobs/Desktop";

const Home = () => {
  return (
    <div className="flex flex-col gap-5" style={{ padding: "20px 50px" }}>
      <Company />
      <Category />
      <CTA />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
