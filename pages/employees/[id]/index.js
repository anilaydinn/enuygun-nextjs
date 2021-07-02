import React from "react";
import EmployeDetail from "../../../components/employee/EmployeDetail";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <EmployeDetail id={id} />
    </div>
  );
}
