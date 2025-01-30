import Title from "../../Custom Components/Title";
import { Link } from "react-router-dom";
import { jobs } from "../../../utils/Featured Jobs";

export default function Desktop() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between gap-5">
        <Title first="Featured" second="jobs" />

        <Link to="" className="text-sm text-blue-600">
          Show all jobs
        </Link>
      </div>

      <div className="flex items-center gap-10 flex-wrap">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="text-xs flex flex-col gap-5 w-[274px] h-[283px]"
          >
            <section className="flex gap-5 items-start">
              <div>{job?.companyLogo}</div>
              <div className="text-blue-700 border border-blue-700">
                {job?.duration}
              </div>
            </section>

            <section>
              <h1>{job?.title}</h1>

              <div className="flex gap-5">
                <p>{job?.company}</p>
                <p>{job?.location}</p>
              </div>
            </section>

            <p>{job?.content}</p>

            <section className="flex items-center gap-2">
              {job?.labels.map((label, index) => (
                <div
                  key={index}
                  style={{
                    color:
                      label === "Marketing"
                        ? "#EB85331A"
                        : label === "Design"
                        ? "#FF65501A"
                        : "#EB85331A",
                  }}
                >
                  {label}
                </div>
              ))}
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
