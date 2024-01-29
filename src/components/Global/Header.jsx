

import { FaHeartBroken } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const linkStyle = {
    backgroundColor: "rgba(0, 0, 0, 0)",
    
  };

  return (
    <header>
      <Link to="/" style={linkStyle}>
        <FaHeartBroken /> Dužusios širdelės
      </Link>
    </header>
  );
};

export default Header;

