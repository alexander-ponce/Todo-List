import React from 'react'

const List = ({content, setContent}) => {

    const deleteUnicorns = (index) => {
        
        const updatedList = content.filter((e, i) => i !== index);

        setContent (updatedList)

    }

    const checkboxComplete = (index) => {

        const crossedToDo = [...content];
        crossedToDo[index].complete = ! crossedToDo[index].complete;
        setContent (crossedToDo)
    
    }





  return (
    <div>
        <h1>All To Dos</h1>
            {
                content.map((list, i) => {
                    return (
                        <div key={i} className="form-check d-flex justify-content-between mx-5 px-5">
                            <div className=''>
                                <input type="checkbox" className='form-check-input btn btn-secondary ' onChange={() => checkboxComplete (i)} checked = {list.complete}/>
                            </div>
                            <div>
                                <label className="form-check-label "> <span className= {list.complete ? "text-decoration-line-through" : ""}>
                                    {list.todo}</span> 
                                </label>
                            </div>

                            
                            <button className="btn btn-danger" onClick={() => deleteUnicorns (i)  } > Delete </button>
                        </div>
                   )
                }
                )
            }
    </div>
  )
}

export default List