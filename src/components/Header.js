import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showForm }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showForm ? "crimson" : "seagreen"}
        text={showForm ? "Close" : "Add Task"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
