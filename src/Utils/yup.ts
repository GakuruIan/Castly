import * as yup from 'yup';
const today = new Date()

today.setHours(0,0,0,0)

export const RegisterSchema= yup.object().shape({
    name:yup.string().min(3,"Name cannot be less than 3 characters").max(30,"Name cannot be more than 30 characters").required("Name is required"),
    email:yup.string().email("Please enter a valid email").required("Email is Required"),
    password:yup.string().min(8,"Password must be 8 characters or more").required("Password is required"),
    confirm_password:yup.string().oneOf([yup.ref('password')],"passwords don't match").required("Please confirm your new password")
})

export const LoginSchema = yup.object().shape({
    email:yup.string().email("Please enter a valid email").required("Email is Required"),
    password:yup.string().min(8,"Password must be 8 characters or more").required("Password is required"),
})


export const PollSchema = yup.object().shape({
    pollTitle:yup.string().min(5,"Title must be more than 5 characters").max(30,"Title must be less than 30 characters").required(),
    options:yup.array().of(yup.object({value:yup.string().min(3,"option cannot be less than 3 characters").max(30,"Option cannot be more than 30 characters").required("Option cannot be empty")})),
    openDate:yup.date().min(today,"Date cannot be in the past"),
    closeDate:yup.date().required("Close date is required").when("openDate",(openDate,schema)=>{
        return openDate ? schema.min(openDate,"Close day cannot be earlier than open date") : schema
    })
})