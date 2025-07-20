import { Button } from "@/temp/components/ui/button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";

const CustomButton = ({
  children,
  to,
  href,
  onClick,
  type = "button",
  className = "",
  unstyled = false,
  target,
  rel,
}) => {
  const buttonStyles = unstyled
    ? className
    : clsx(
        " rounded-[35px] cursor-pointer hover:text-[#9C448D]",
        "border border-solid border-[#c55ebd]",
        "shadow-[0px_0px_40px_#ffffff80]",
        "bg-[linear-gradient(180deg,rgba(107,45,110,1)_0%,rgba(60,9,69,1)_100%)]",
        "[font-family:'Quicksand',Helvetica]",
        "font-semibold text-white text-lg",
        "transition-all duration-300 hover:brightness-110",
        className
      );

  if (to) {
    // Internal navigation using React Router
    return (
      <Button asChild className={buttonStyles}>
        <Link to={to}>{children}</Link>
      </Button>
    );
  }

  if (href) {
    // External link with anchor tag
    return (
      <Button asChild className={buttonStyles}>
        <a href={href} target={target} rel={rel}>
          {children}
        </a>
      </Button>
    );
  }

  // Regular button (e.g., form submit)
  return (
    <Button onClick={onClick} type={type} className={buttonStyles}>
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string, // For React Router
  href: PropTypes.string, // For external links
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  unstyled: PropTypes.bool,
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default CustomButton;
