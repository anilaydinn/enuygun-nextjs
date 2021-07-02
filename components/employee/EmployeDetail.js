import React, { useEffect } from "react";
import styles from "../../styles/EmployeDetail.module.scss";
import { connect } from "react-redux";
import { getEmploye } from "../../redux/actions/employeActions";

function EmployeDetail(props) {
  const { employe, id, getEmploye } = props;

  useEffect(() => {
    getEmploye(id);
  }, []);

  return (
    <div className={styles.detailContainer}>
      <div className={styles.employeInfoPanel}>
        <img src={employe.image} className={styles.employeDetailImage} />
        <div className={styles.employeInfoContainer}>
          <div className={styles.employeInfos}>
            <h2>
              {employe.firstName} {employe.lastName}
            </h2>
            <p>
              <b>Phone:</b> {employe.phone}
            </p>
            <p>
              <b>Address:</b> {employe.address}
            </p>
            <p>
              <b>Vote Count:</b> {employe.voteCount}
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  employe: state.employe,
});

const mapDispatchToProps = (dispatch) => ({
  getEmploye: (empId) => {
    dispatch(getEmploye(empId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeDetail);
