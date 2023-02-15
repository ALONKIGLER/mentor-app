import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import DropFile from "./DropFile";

import PageTitle from "../../../../layouts/PageTitle";
import { Dropdown } from "react-bootstrap";

const Compose = () => {
  return (
    <Fragment>
      <PageTitle activeMenu="Compose" motherMenu="Email" pageContent="Email" />
    </Fragment>
  );
};

export default Compose;
