


const Input = ({valorInput, nameInput,addData}) => {
    return (

        <input 
             type="text" 
             name={nameInput}
             value={valorInput}
             onChange={addData}

        />
    )
}

export default Input;