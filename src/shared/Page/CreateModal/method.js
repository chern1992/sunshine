const show = (id, config={}, showCallback) => {
    if(this.state.modal.hasOwnProperty('id')) {
        console.error('需要先初始化createModal');
        return false;
    }
    let modalData = this.state.modal[id];
    modalData = Object.assign(modalData, config, {mark: 'show'});
    modalData.showModal = true;
    if(config.hasOwnProperty('content')) {
        modalData.update = true;
    }
    this.setState((prvState, props) => ({
        modal: prvState.modal
    }), () => {
        if(showCallback && typeof showCallback === 'function') {
            showCallback();
        }
    })
}

const hide = (id) => {
    this.state.modal[id].showModal = false;
    this.state.modal[id].userControl = false;
    this.setState( (prevState) => ({
        modal: prevState.modal
    }))
}

export {
    show,
    hide 
}