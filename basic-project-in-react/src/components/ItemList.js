import { useState } from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal'


export const ItemList = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleModalShow = () => {
        setShowModal(true);
    }
    const handleModalDisable = () => {
        setShowModal(false)
    }
    return (
        <div className='card'>
            <h2>{props.title}</h2>
            <div className='actions'>
                <button className='btn' onClick={handleModalShow}>
                    Delete
                </button>
            </div>
            {showModal && <Backdrop onClick={handleModalDisable} />}
            {showModal && <Modal text='Are you sure?' onClose={handleModalDisable} />}
        </div>
    )
}