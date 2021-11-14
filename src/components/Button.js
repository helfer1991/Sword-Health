import classes from './Button.module.css';

const Button = (props) => {
    return (
        <div className={ classes.button }>
            <button onClick={ props.onClick }>{ props.text }</button>
        </div>
    )
}

export default Button;