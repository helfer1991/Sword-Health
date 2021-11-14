const TextInput = (props) => {
    const { type, text, placeholder, onChange } = props;
    return (
        <div>
            <div>
                <label htmlFor={ type }>{ text }</label>
                <input 
                    type='text' 
                    placeholder={ placeholder } 
                    required 
                    id={ type }
                    onChange={ onChange }
                />
            </div>
        </div>
    );
}

export default TextInput;