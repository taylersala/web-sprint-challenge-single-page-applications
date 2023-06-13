import * as yup from 'yup';


const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters"),
        toppings: yup
        .boolean()
        .required("Please select at least one topping"),
        'special-text': yup
        .string()
        .trim()
        .optional(),
        size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], "Invalid pizza size")
        .required("Please select a pizza size"),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        mushrooms: yup.boolean(),
        onion: yup.boolean(),
})

export default formSchema;