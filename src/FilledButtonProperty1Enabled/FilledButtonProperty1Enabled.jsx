import "./FilledButtonProperty1Enabled.css";
import { Home012 } from "../Home012/Home012.jsx";
import { Home01 } from "../Home01/Home01.jsx";

export const FilledButtonProperty1Enabled = ({
  instance = <Home012 className="home-01-instance" />,
  boolean = true,
  text = "Button",
  property1 = "enabled",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "filled-button-property-1-enabled " +
        className +
        " " +
        variantsClassName
      }
    >
      {boolean && <>{instance}</>}
      <div className="button">{text} </div>
    </div>
  );
};
