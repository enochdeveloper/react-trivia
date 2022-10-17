import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {isModalOpen,closeModal,correct,questions} = useGlobalContext();

  const percentageCorrect = (100*(correct/questions.length)).toFixed(0);
  
  return (
    <div className={`modal-container ${isModalOpen ? 'isOpen' : ''}`}>
      <div className="modal-content">
        <h2>congrats</h2>
        <p>You answered {percentageCorrect}% of questions correctly</p>
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
}

export default Modal
