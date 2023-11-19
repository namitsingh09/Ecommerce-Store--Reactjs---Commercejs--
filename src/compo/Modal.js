import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useEffect } from 'react';
import '../App.css';
import Productx from './Product';

const customStyles = {
  content: {
    position: "fixed",
width: "90" ,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: "rgba(255, 255, 255, 1.75)'"
    
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function Modals() {

    useEffect(() => {
        // Open the modal when the component mounts
        openModal();
      }, []);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    
    
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='iii' >
     
      <Modal id='iii' 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        overlayClassName="Overlays"
        
      >
        <h1 id='he'>Available in Aburoad</h1>
        <img id='bugg'  src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frailmantri.in%2Fwp-content%2Fuploads%2F2017%2F09%2F487_abu.jpg&f=1&nofb=1&ipt=394847e2387a483266822156f14731e3d066398685eaa867e14709c141b7c639&ipo=images'></img>
        
                          <pre>                     24/7



                          </pre>

                          <p>Get Item Fast in 15min</p>


                          <h1 id='he'>Location We Deliver</h1>
                          
                          1.Kiverli Tollplaza <br></br>
                          2. Madhav University <br></br>
                          3. Taleti <br></br>
                          <Productx />
                          
                          <button onClick={closeModal}>                       close</button>

      
       
      </Modal >
    </div>
  );
}

export default Modals;


//<button onClick={closeModal}>close</button>