import React, {useState} from 'react'

const InputChange = () => {

    const [input, setInput] = useState('Pedro');

    const onChange = (e) =>{
        setInput(e.target.value);
    }

    return (
        <div>
            <input type = 'text' placeholder='Type' onChange={onChange} />
            {input}        
        </div>
    )
}

export default InputChange
