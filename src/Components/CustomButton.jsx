import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";

const CustomButton = ({
  children,
  to, // optional routing support
  onClick,
  type = "button",
  className = "",
}) => {
  const buttonStyles = clsx(
    "h-10 w-48 rounded-[35px]",
    "border border-solid border-[#c55ebd]",
    "shadow-[0px_0px_40px_#ffffff80]",
    "bg-[linear-gradient(180deg,rgba(107,45,110,1)_0%,rgba(60,9,69,1)_100%)]",
    "[font-family:'Quicksand',Helvetica]",
    "font-semibold text-white text-lg",
    "transition-all duration-300 hover:brightness-110",
    className
  );

  if (to) {
    return (
      <Button asChild className={buttonStyles}>
        <Link to={to}>{children}</Link>
      </Button>
    );
  }

  return (
    <Button
      onClick={onClick}
      type={type}
      className={buttonStyles}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default CustomButton;
