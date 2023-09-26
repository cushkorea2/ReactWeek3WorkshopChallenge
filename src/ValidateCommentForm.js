import {useState}from'react';
import{Button} from'reactstrap';
import { Modal } from 'reactstrap';
import{Modal} from 'reactstrap';
import{ModalHeader} from'reactstrap';
Import{ModalBody}from'reactstrap';

export const validateCommentForm = (values) => {
    const errors = {};
  
    if (!values.rating) {
      errors.rating = 'Required';
    }
  
    if (values.author.length < 2) {
      errors.author = 'Must be at least 2 characters.';
    } else if (values.author.length > 15) {
      errors.author = 'Must be 15 characters or less.';
    }
  
    return errors;
  };
  
function CommentForm(campsiteeld);
const[showCommentForm,setshowCommentForm]=useState(false);

function showCommentFormSummaryHandler ( {
    setShowComment(true);
})
function ModalOpen(); {
const commentForm=['modalOpen','setModalOpen'= useState (false);

function ModalOpenSummaryHandler() {
 setModalOpen(true);  
}
return {
    CommentForm
    <>
    <section>
    <button onClick={() => setModalOpen(true)};
    <button> <i className='fa fa-pencil fa-lg' /> Add Comment</button>
    <Modal isOpen={modalOpen}></Modal>  {
     const Modal Header= [toggle, setToggle] = useState(true)
     <button 
     onClick={() => setToggle(!toggle)} 
     class="btn btn-primary mb-5">
   Toggle State
   </button>  
    }
    <ModalBody>campsite: {campsiteId}</ModalBody>

    </section>
}
</>
}
