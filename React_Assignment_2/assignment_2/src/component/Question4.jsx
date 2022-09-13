import React, { useState } from 'react'

function Question4() {
    const [rating1, setRating] = useState(0)
    let [ratingStr, setRatingStr] = useState('');
    let str = ''
    const addRating = () => {
        if (rating1 <= 5 && rating1 > 0 ) {
            for (let i = 1; i <= rating1; i++) {
                str += ' * '
            }
            setRatingStr(str);
        }
        else{
            alert("Enter Rating 1 to 5")
        }
    }
    return (
        <div className='container mt-2'>
            <h6>4) Create a component which will show the rating using star images. The component should receive a property rating which should control number of stars to be shown.</h6>
            <div className='mt-5'>
                <label className='from-label'>Enter Rating</label><br />
                <input type="number" onChange={e => {
                    setRating(e.target.value)
                }} className='from-control' />
                <br />
                <label className='from-label h3' htmlFor="">{ratingStr}</label><br></br>
                <button onClick={addRating} className='btn btn-success m-3 p-2'>Show_Rating</button>
            </div>
            <hr />
        </div>
    )
}

export default Question4