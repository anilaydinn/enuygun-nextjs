import { useEffect } from "react";
import { connect } from "react-redux";
import EmployeList from "../components/employee/EmployeList";
import { getAllEmployees } from "../api/index";
import { setEmployees } from "../redux/actions/employeActions";

function App({ employees, setEmployees }) {
  useEffect(() => {
    setEmployees(employees);
  }, []);

  return <EmployeList employees={employees} />;
}

const mapStateToProps = (state) => ({
  employeesRedux: state.employees,
});

const mapDispatchToProps = (dispatch) => ({
  setEmployees: (employees) => {
    dispatch(setEmployees(employees));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

export const getServerSideProps = async () => {
  const employees = await getAllEmployees();

  return {
    props: {
      employees,
    },
  };
};
