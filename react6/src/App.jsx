import { useState } from 'react'


function DeleteButton() {
  const [visible, setvisible] = useState(true);

  return<> 
    {
      visible ? (
        <button onClick={() => setvisible(false)}>Delete Me</button>
      ) : null
    }
  </>

}

export default DeleteButton
