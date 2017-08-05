import { autorun } from "mobx";
import layoutState from "./LayoutState";

const stores = {
  layout : layoutState,
};

autorun(()=>{
});

export default stores;