import { Link } from "react-router-dom";

const Button = ({ link, btnType, btnText }) => {
  return (
    <Link to={link} className={`btn ${btnType}`}>
      {btnText}
    </Link>
  );
};

export default Button;
