import React, {Component} from 'react';
import { NInput, NIcon } from 'shared/base';
class SearchInput extends Component {
  state = {
    value: '',
    focus:false
  }

  onChangeValue = () => {
    this.setState({ value: e.target.value });
  }

  onFocus = (e) => {
    this.setState({ focus: true })
  }
  
  onBlur = (e) => {
      this.setState({ focus: false })
  }

  render() {
    const { value } = this.state;
    return (
      <div style={this.props.style}>
        <NInput
          placeholder="Search"
          prefix={<NIcon type={this.state.focus?'arrow-left':'search'} style={{ color:!this.state.focus?'rgba(0,0,0,.25)':'#1890ff' }} />}
          value={value}
          onChange={this.onChangeValue}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
            />
      </div>
    );
}

}

export default SearchInput;
