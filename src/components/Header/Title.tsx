import Button from "../Custom Components/Button";
import { default as TitleButton } from "../Custom Components/Title";

export default function Title() {
  return (
    <div className="flex flex-col gap-5" style={{ padding: "20px 50px" }}>
      <TitleButton first="Discover more than" second="5000+ Jobs" />
      <p className="text-gray-400">
        Great platform for the job seeker that searching for new career heights
        and passionate about startups.
      </p>

      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <div>
            <input
              type="text"
              placeholder="Job title or keyword outline-none"
            />
          </div>
          <div>
            <select name="" id="">
              <option value="florence, Italy">florence, Italy</option>
            </select>
          </div>
          <Button>Search my job</Button>
        </div>

        <p>Popular : UI Designer, UX Researcher, Android, Admin</p>
      </div>
    </div>
  );
}
