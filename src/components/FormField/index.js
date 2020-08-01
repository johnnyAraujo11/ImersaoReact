import React from 'react'


function FormField({value, label,onChange, type, name }){
    return  (
        <div>
             <label>
                 {label}
                 <input type={type}  name={name} value ={value}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}



export default FormField;