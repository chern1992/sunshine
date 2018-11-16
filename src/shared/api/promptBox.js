import ReactDOM from 'react-dom';
import PromptBox from './../contains/PromptBox';

export default function(props) {
    props = props || {};
    let isShow = document.getElementsByClassName('contains-prompt-box-project')[0];
    //阻止连续多次点击时页面出现多个toast弹框
	// if (isShow) {
	// 	return false;
    // }
    let div = document.createElement('div');
    div.className = 'contains-prompt-box-project';
    document.getElementById('app').appendChild(div);
    let promptBox = ReactDOM.render(<PromptBox {...props}/>, div);
    return promptBox;
}