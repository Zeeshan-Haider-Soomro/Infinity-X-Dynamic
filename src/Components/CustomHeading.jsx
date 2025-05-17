const CustomHeading = ({ 
  firstText, 
  secondText, 
  firstColor = "#5C0E6E", 
  secondColor = "#A95C9C", 
  textSize = "text-3xl",
  align = "text-center"
}) => {
  return (
    <h2 className={`${textSize} ${align} font-bold`}>
      <span style={{ color: firstColor }}>{firstText}</span>{" "}
      <span style={{ color: secondColor }}>{secondText}</span>
    </h2>
  );
};

export default CustomHeading;
