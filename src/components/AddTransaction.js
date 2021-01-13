import React, {useState} from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState(''); /* Create a state text and a function to manipulate the state, setText*/
    const [amount, setAmount] = useState(0); 
    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlfor="text">Text</label>
                    {/* Connect state to the input. Add value and onchange*/}
                    {/* Event tag, e will get whatever that is typed in*/}
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." /> 
                </div>
                <div className="form-control">
                    <label htmlfor="amount"
                        >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
            
        </>
    )
}
