import React, {useState} from 'react'

const Form = ({content, setContent}) => {

  const [toDo, setToDo]  = useState({
        todo: "",
        complete: false

  })

  const changeHandler = (e) => {
    setToDo({...toDo, [e.target.name] : e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setContent([...content, toDo]);
    setToDo({
        todo: "",
        complete: false
        
            })
  }


  return (
    <div>
        <form className="col-md " onSubmit= {submitHandler}>
          <div className= "form-control">
            <label> Create a To Do List</label>
            <input type="text" className="form-control" name="todo"  onChange= {changeHandler} value={toDo.todo} />
            <button className="btn btn-dark">Add</button>
            
          </div>  

        </form>


    </div>
  )
}

export default Form