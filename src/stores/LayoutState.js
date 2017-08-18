import { observable, action } from "mobx";

class LayoutState {

  @observable index = false;

  constructor(){
    this.index = 0;
  }

}

const layoutState = new LayoutState();
export default layoutState
