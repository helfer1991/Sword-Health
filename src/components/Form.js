import React, { useState } from 'react';

import TextInput from './TextInput';
import Button from './Button';

import classes from './Form.module.css';

const Form = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [bmiClass, setBmiClass] = useState('');

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    }

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    }

    const calculateBmi = (event) => {
        event.preventDefault();
        let value = weight/Math.pow(height, 2);
        console.log(value);
        setBmi(value);
        setBmiClass(checkBmiClass(value));
    }

    const checkBmiClass = bmi => {
        let bmiString;
        if(bmi <= 18.5) {
            bmiString = 'Underweight';
        } else if(bmi <= 25) {
            bmiString = 'Normal';
        } else if(bmi <= 30){
            bmiString = 'Overweight';
        } else {
            bmiString = 'Obese';
        }
        return bmiString;
    }

    return (
        <div>
            <div className={ classes.row }>
                <TextInput 
                    type='height' 
                    text='Your height: '
                    placeholder='Your height in mts'
                    value={ height }
                    onChange={ handleHeightChange }
                />
            </div>
            <div className={ classes.row }>
                <TextInput 
                    type='weight' 
                    text='Your weight:'
                    placeholder='Your weight in kgs'
                    value={ weight }
                    onChange={ handleWeightChange }
                />
            </div>
            <div>
                <Button 
                    text='Calculate BMI' 
                    onClick={ calculateBmi } 
                />
            </div>
            <div className='row'>
                <label>Your BMI:</label>
                {bmi}
                <br />
                <p>{ bmiClass }</p> 
            </div>
        </div>
    );
}

export default Form;