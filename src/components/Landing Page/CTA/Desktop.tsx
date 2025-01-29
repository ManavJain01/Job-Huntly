import { ReactComponent as Rectangle } from "../../../../public/imgs/Landing Page/CTA/Rectangle.svg";
import Button from "../../Custom Components/Button";

export default function Desktop() {
  return (
    <div className="relative">
      {/* <Rectangle className="absolute top-0 left-0 w-[1192px] h-[414px]" /> */}

      <div className="z-10">
        <h1 className="font-bold text-3xl">Start posting jobs today</h1>
        <p>Start posting jobs for only $10.</p>
        <Button className="">Sign Up For Free</Button>
      </div>
    </div>
  );
}
