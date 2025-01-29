import { ReactComponent as Vodafone } from "../../../../public/imgs/Landing Page/Company/Vodafone.svg";
import { ReactComponent as Intel } from "../../../../public/imgs/Landing Page/Company/intel.svg";
import { ReactComponent as Amd } from "../../../../public/imgs/Landing Page/Company/amd.svg";
import { ReactComponent as Talkit } from "../../../../public/imgs/Landing Page/Company/talkit.svg";
import { ReactComponent as Tesla } from "../../../../public/imgs/Landing Page/Company/tesla.svg";

export default function Desktop() {
  return (
    <div>
      <p>Companies we helped grow</p>

      <div className="flex gap-5 justify-between">
        <Vodafone className="text-gray-500 h-20 w-16" />
        <Intel className="text-gray-500 h-20 w-16" />
        <Tesla className="text-gray-500 h-20 w-16" />
        <Amd className="text-gray-500 h-20 w-16" />
        <Talkit className="text-gray-500 h-20 w-16" />
      </div>
    </div>
  );
}
