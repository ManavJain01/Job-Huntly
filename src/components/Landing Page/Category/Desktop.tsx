import { ReactComponent as Design } from "../../../../public/imgs/Landing Page/Category/Design.svg";
import { ReactComponent as Sales } from "../../../../public/imgs/Landing Page/Category/Sales.svg";
import { ReactComponent as Marketing } from "../../../../public/imgs/Landing Page/Category/Marketing.svg";
import { ReactComponent as Finance } from "../../../../public/imgs/Landing Page/Category/Finance.svg";
import { ReactComponent as Technology } from "../../../../public/imgs/Landing Page/Category/Technology.svg";
import { ReactComponent as Engineering } from "../../../../public/imgs/Landing Page/Category/Engineering.svg";
import { ReactComponent as Business } from "../../../../public/imgs/Landing Page/Category/Business.svg";
import { ReactComponent as HumanResource } from "../../../../public/imgs/Landing Page/Category/Human Resource.svg";
import Title from "../../Custom Components/Title";

export default function Desktop() {
  const option1 = [
    {
      logo: <Design className="h-8" />,
      title: "Design",
      jobs: "235",
    },
    {
      logo: <Sales className="h-8" />,
      title: "Sales",
      jobs: "756",
    },
    {
      logo: <Marketing className="h-8" />,
      title: "Marketing",
      jobs: "140",
    },
    {
      logo: <Finance className="h-8" />,
      title: "Finance",
      jobs: "325",
    },
  ];

  const option2 = [
    {
      logo: <Technology className="h-8" />,
      title: "Technology",
      jobs: "436",
    },
    {
      logo: <Engineering className="h-8" />,
      title: "Engineering",
      jobs: "542",
    },
    {
      logo: <Business className="h-8" />,
      title: "Business",
      jobs: "211",
    },
    {
      logo: <HumanResource className="h-8" />,
      title: "Human Resource",
      jobs: "346",
    },
  ];

  return (
    <div className="text-sm flex flex-col gap-5">
      <Title first="Explore By" second="category" />

      {/* Row 1 */}
      <div className="flex gap-5 justify-between">
        {option1?.map((option, index) => (
          <div
            key={index}
            className={`${
              index === 2 && "bg-[#4640DE] text-white"
            } flex flex-col gap-2`}
            style={{ padding: "10px 20px" }}
          >
            <div>{option?.logo}</div>
            <h1>{option?.title}</h1>
            <p className="whitespace-nowrap text-xs text-gray-400">
              {option?.jobs} are available
            </p>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex gap-5 justify-between">
        {option2?.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2`}
            style={{ padding: "10px 20px" }}
          >
            <div>{option?.logo}</div>
            <h1>{option?.title}</h1>
            <p className="whitespace-nowrap text-xs text-gray-400">
              {option?.jobs} are available
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
