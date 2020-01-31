import React from "react";
// import aux from "../../hoc/Auxillary";
// import { NavLink } from "react-router-dom";
// import InlineError from "../../component/Helpers/InlineError";

import PurchaseEntryPhaseOne from './purchaseEntryPhaseOne';
import PurchaseEntryPhaseTwo from './purchaseEntryPhaseTwo';

const purchaseEntryForm = props => {
  return (
    <div>
    <PurchaseEntryPhaseOne props = {props} />
    <PurchaseEntryPhaseTwo props = {props} />
    </div>
  );
};

export default purchaseEntryForm;
