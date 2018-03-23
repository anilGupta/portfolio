import React, { PureComponent } from 'react';
import autobind from 'autobind-decorator'
const {PropTypes} = React;
const {div} = React.DOM;

const Status = {
  PENDING: 'pending',
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed',
};


class ImageLoader extends PureComponent {
  static propTypes = {
    wrapper: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    src: PropTypes.string,
    onLoad: PropTypes.func,
    onError: PropTypes.func,
    imgProps: PropTypes.object,
    defaultImage: PropTypes.string
  };

  static defaultProps = {
    wrapper: div,
  };

  constructor(props) {
    super(props);
    this.state = {status: props.src ? Status.LOADING : Status.PENDING};
  }

  componentDidMount() {
    if (this.state.status === Status.LOADING) {
      this.createLoader();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this.setState({
        status: nextProps.src ? Status.LOADING : Status.PENDING,
      });
    }
  }

  componentDidUpdate() {
    if (this.state.status === Status.LOADING && !this.img) {
      this.createLoader();
    }
  }

  componentWillUnmount() {
    this.destroyLoader();
  }

  getProps(){
    const {className="", style, src, placeholder} = this.props,
      {status } = this.state,
      imageSrc = Status.LOADED ? src : placeholder;
    return {
      className : `${className} ${status}`,
      style : Object.assign({}, style, {
        backgroundImage : `url("${imageSrc}")`
      })
    }
  }

  createLoader() {
    this.destroyLoader();  // We can only have one loader at a time.
    this.img = new Image();
    this.img.onload = this.handleLoad;
    this.img.onerror = this.handleError;
    this.img.src = this.props.src;
  }

  destroyLoader() {
    if (this.img) {
      this.img.onload = null;
      this.img.onerror = null;
      this.img = null;
    }
  }

  @autobind
  handleLoad(event) {
    this.destroyLoader();
    this.setState({status: Status.LOADED});
    if (this.props.onLoad) this.props.onLoad(event);
  }

  @autobind
  handleError(error) {
    this.destroyLoader();
    this.setState({status: Status.FAILED});
    if (this.props.onError) this.props.onError(error);
  }

  renderChildren(){
    return <img src={this.props.defaultImage} />
  }

  render() {
    const { wrapper } = this.props,
      args = [this.getProps()];
      args.push(this.renderChildren());
      return wrapper(...args);
  }
}


export default ImageLoader