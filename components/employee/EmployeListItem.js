import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import styles from "../../styles/EmployeListItem.module.scss";
import { incrementEmployeVote } from "../../redux/actions/employeActions";

function EmployeListItem(props) {
  const { employe, index, incrementEmployeVote } = props;

  return (
    <div key={employe.id + index} className={styles.listItem}>
      <Link
        className={styles.link}
        href="/employees/[id]"
        as={`employees/${employe.id}`}
        shallow={true}
      >
        <img className={styles.empImage} src={employe.image} />
      </Link>
      <Link
        className={styles.link}
        href="/employees/[id]"
        as={`employees/${employe.id}`}
        shallow={true}
      >
        <div>{`${employe.firstName} ${employe.lastName}`}</div>
      </Link>
      <Link
        className={styles.link}
        href="/employees/[id]"
        as={`employees/${employe.id}`}
        shallow={true}
      >
        <div>{employe.phone}</div>
      </Link>
      <Link
        className={styles.link}
        href="/employees/[id]"
        as={`employees/${employe.id}`}
        shallow={true}
      >
        <div>{employe.address}</div>
      </Link>
      <button
        onClick={() => incrementEmployeVote(employe.id)}
        className={styles.voteButton}
      >
        Vote
      </button>
      <div>{employe.voteCount}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  employees: state.employees,
});

const mapDispatchToProps = (dispatch) => ({
  incrementEmployeVote: (empId) => {
    dispatch(incrementEmployeVote(empId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeListItem);
