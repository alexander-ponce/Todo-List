import React from 'react'

const List = ({content, setContent}) => {

    const deleteUnicorns = (index) => {
        
        const updatedList = content.filter((e, i) => i !== index);

        setContent (updatedList)
    }


  return (
    <div>
        <h1>All To Dos</h1>
            {
                content.map((list, i) => {
                    return (
                        <div key={i}>
                            <p>Task: {list.todo}</p>
                            <p>complete: {list.complete}</p>

                            <button onClick={() => deleteUnicorns (i)  } > Delete </button>
                        </div>
                   )
                }
                )
            }
    </div>
  )
}

export default List