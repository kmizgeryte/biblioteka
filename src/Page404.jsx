import { Link } from "react-router-dom";

const Page404 = () => {
    return (
      <div className="Page404">
        <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXBpcXVsMngwaDkwMjIwYWh3MWo2Z2Z1c2ZheXl3MnpwMWhlbnVpdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UoeaPqYrimha6rdTFV/giphy.gif" alt="page404" />
        <h1>Sorry, page was not found. </h1>
        <Link to="/" className="button">
          MainPage
        </Link>
      </div>
    );
  };