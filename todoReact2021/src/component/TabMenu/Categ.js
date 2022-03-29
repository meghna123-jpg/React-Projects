import React from 'react'

const Categ = ({filterItem, catItems}) => {
    return (
        <>
          <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    
                    {
                        catItems.map((curElem, index) => {
                            return <button key={index} className="btn btn-warning" onClick={() => filterItem(curElem)}>{curElem}</button> 

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Categ
