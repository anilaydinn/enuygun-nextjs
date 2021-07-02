import React, { useEffect } from "react";
import EmployeListItem from "./EmployeListItem";
import { connect } from "react-redux";
import styles from "../../styles/EmployeList.module.scss";
import { setEmployees } from "../../redux/actions/employeActions";

function EmployeList(props) {
  const { employees, employeesRedux } = props;

  useEffect(() => {
    setEmployees(employees);
  }, []);

  return (
    <div className={styles.listContainer}>
      <div className={styles.itemsContainer}>
        {employeesRedux.length > 0 &&
          employeesRedux.map((employe, index) => {
            return (
              <EmployeListItem
                key={`${employe.id}-${index}`}
                employe={employe}
                index={index}
              />
            );
          })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  employeesRedux: state.employees,
});

const mapDispatchToProps = (dispatch) => ({
  incrementEmployeVote: (empId) => {
    dispatch(incrementEmployeVote(empId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeList);
