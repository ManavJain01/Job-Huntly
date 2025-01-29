// Importing React Icons
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

import { useContext } from "react";
import { ReactComponent as Logo } from "../../../public/imgs/Logo.svg";
import { default as ButtonComponent } from "../Custom Components/Button";
import Title from "./Title";
import { ThemeContext } from "../../ThemeContext";
import { Button } from "@mui/material";
Button;
const Header = () => {
  // Context API
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeContextProvider");
  }
  // const { toggleTheme, mode } = ThemeContext;
  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between gap-10"
        style={{ padding: "10px 50px" }}
      >
        <div className="flex gap-10 items-center">
          <Logo className="w-28" />
          <p className="">Find Jobs</p>
          <p className="">Browse Companies</p>
        </div>
        <div className="text-sm flex gap-5">
          <button>Login</button>
          <Button>Sign Up</Button>
        </div>

        {/* <Button variant="contained" onClick={toggleTheme}>
              {mode === "light" ? (
                <MdSunny size={20} color={"yellow"} />
              ) : (
                <FaMoon size={20} color={"#ffffff"} />
              )}
            </Button> */}
      </div>

      <Title />
    </div>
  );
};

export default Header;
