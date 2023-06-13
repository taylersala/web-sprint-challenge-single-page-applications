import React from "react";
import * as yup from 'yup';


const Form = (props) => {
    const { change, submit, errors } = props;
    const { name, pepperoni, sausage, mushrooms, onion, special, size } = props.values;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
    <div> 
        <h1>Build Your Own Pizza</h1>
        <p>{errors.name}</p>
        <form onSubmit={onSubmit} id="pizza-form">
            <label>Name:
                <input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                id="name-input"
                />
            </label>
            <label> Pizza Size:
          <select
            name="size"
            value={size}
            onChange={onChange}
            id="size-dropdown"
          >
            <option value="">Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
            <label>Pepperoni
                <input
                type="checkbox"
                name="pepperoni"
                value={pepperoni}
                checked={pepperoni}
                onChange={onChange}
                />
            </label>
            <label>Sausage
                <input
                type="checkbox"
                name="sausage"
                value={sausage}
                checked={sausage}
                onChange={onChange}
                />
            </label>
            <label>Mushrooms
                <input
                type="checkbox"
                name="mushrooms"
                value={mushrooms}
                checked={mushrooms}
                onChange={onChange}
                />
            </label>
            <label>Onion
                <input
                type="checkbox"
                name="onion"
                value={onion}
                checked={onion}
                onChange={onChange}
                />
            </label>
            <label>
                <input 
                type="text"
                name="special-text"
                value={special}
                id="special-text"
                onChange={onChange}
                />
            </label>
            <input type="submit" value="Order" id="order-button" />
        </form>
    </div>
    )
}

export default Form;