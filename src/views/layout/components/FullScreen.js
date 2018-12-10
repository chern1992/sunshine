import react, {Component} from 'react';
import { NIcon } from 'shared/base';
class FullScreen extends Component {
  state = {
    fullScreen: false
  }
  componentDidMount() {
    let isFullscreen = document.fullscreenElement || document.fullScreen;
    isFullscreen = !!isFullscreen;
    document.addEventListener('fullscreenchange', () => {
      this.setState(
          { fullScreen: !this.state.fullScreen }
      );
    });
    this.setState(
      { fullScreen: isFullscreen }
    );
  }

  handleFullscreen = () => {
    let main = document.body;
    if (this.state.fullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }else {
      if (main.requestFullscreen) {
        main.requestFullscreen();
      }
    }
  }

  render() {
    return (
      <NIcon onClick={this.handleFullscreen} type={this.state.fullScreen ? 'shrink' : 'arrows-alt'} />
    )
  }
}
export default FullScreen;