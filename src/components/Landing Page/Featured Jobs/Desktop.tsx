import Title from "../../Custom Components/Title";
import { Link } from "react-router-dom";

export default function Desktop() {
  return (
    <div>
      <div className="flex items-center justify-between gap-5">
        <Title first="Featured" second="jobs" />

        <Link to="" className="text-sm text-blue-600">
          Show all jobs
        </Link>
      </div>
    </div>
  );
}
