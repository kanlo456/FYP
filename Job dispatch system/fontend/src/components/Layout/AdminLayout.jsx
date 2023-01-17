import { Fragment } from "react";

import Sidebar from "./Sidebar";

const AdminLayout = (props) => {
  return (
    <Fragment>
      <Sidebar />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default AdminLayout;
