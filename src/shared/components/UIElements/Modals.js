import React from 'react' 
import ReactDOM from 'react-dom'
import Backdrop from './Backdrop'
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import './Modals.css'

const ModalOverlay = props => {
    console.log(props)
    const content = (
        <Modal isOpen={props.show}>
        <ModalHeader toggle={props.onCancel}>
        <h2>{props.header}</h2>
        </ModalHeader>
        <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
        <ModalBody>
                    {props.children}
        </ModalBody>
        <ModalFooter>
                    {props.footer}
        </ModalFooter>
        </form>
      </Modal>
    )
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}
const Modals = props => {
    console.log({...props})
    return(
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancel}/>}
            <ModalOverlay {...props}/>
        </React.Fragment>
    )
};

export default Modals;