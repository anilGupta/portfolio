import { observable, action } from "mobx";

const staticLength = 12;
class LayoutLayoutState {

  @observable index = false;

  constructor(){
    this.index = 0;
  }

}

const layoutState = new LayoutState();
export default layoutState
