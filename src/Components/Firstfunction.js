import React, { useState } from 'react'
// import "./App.css"
function  Firstfunction ()  {


  const [user, setUser] = useState({ Username: "", Department: "", Rating: "" })
  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const [arr1, setArr1] = useState([])// 
  const [change,setSwitch]=useState(true)




  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if(change){
      setArr1([...arr1, user])
    console.log(arr1);
    }
    // setArr1([...arr1, user])
    // console.log(arr1);
    setSwitch(!change)

  }
  return (
  <>

    <div>

      <form onSubmit={onSubmit}>
        
        { change ? 
        <div id='formdiv'>
          
        <h1>Employee Feedback Form </h1>
        
      
        <label htmlFor="Username" className='labelForInput'>Name:</label>
        <input type="text" name="Username" value={user.Username} onChange={onChangeUser} className='imputTagStyles' /> <br /><br>
        </br>
        <label htmlFor="Department" className='labelForInput'>Department:</label>
        <input type="text" name="Department" value={user.Department} onChange={onChangeUser} className='imputTagStyles' /> <br /><br>
        </br>
        <label htmlFor="Rating" className='labelForInput'>Rating:</label>
        <input type="number" name="Rating" value={user.Rating} onChange={onChangeUser} className='imputTagStyles' /> <br /><br>
        </br>
        </div>

        
      
      
      :
      <div>
        {/* <h1 id='heading2'>EMPOLOYEE FEEDBACK DATA </h1> */}
       
        
      
      <div id='flex' className='OuterDiv'>
        

        {
          arr1.map((value, index) => {
            return (
            <>
          	  
              
                <div className='innerElements' key={index} >
                  <span>Name: {value.Username} | </span>
                  <span> Department: {value.Department} | </span>
                  <span> Rating: {value.Rating} </span>
                </div>
              
            </>
            )
          })
        }
      </div>
      </div>}
      <br />
      <button id='btn' type="submit"  className='submitagStyles'>{ change ? <span>Submit</span> : <span >Go Back</span> }</button>
      </form>
    </div>
</>
  )
}

export default Firstfunction