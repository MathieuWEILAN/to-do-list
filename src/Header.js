import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <FontAwesomeIcon icon="list-alt" />
        &nbsp; ToDo List
      </h1>
    </div>
  );
};

export default Header;
