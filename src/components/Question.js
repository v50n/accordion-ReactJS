import React, {useState} from 'react'

const Question = ({title, info}) =>{
    const [showResponse, setShowResponse] = useState(false);

    const handleBtnClick = () =>{
        setShowResponse(!showResponse);
    }

    return (
        <div className="box-question">
        <div className="question-title">
            <h4>{title}</h4>
            <div className="btn" onClick={handleBtnClick}>
            {
                showResponse ? (<i class="fas fa-minus"></i>) : (<i class="fas fa-plus"></i>)
            }
            </div>
        </div>
        <div className="response">
        {
            showResponse ? (`${info}`) : (``)
        }
                
        </div>
        

        </div>
    ); 
}

export default Question;