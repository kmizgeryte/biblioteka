import { FaHeartBroken } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/"><FaHeartBroken /> Dužusios širedelės</Link>
    </header>
  )
}

export default Header