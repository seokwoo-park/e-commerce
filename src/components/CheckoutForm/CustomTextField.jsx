import React from 'react'
import { TextField,Grid } from '@material-ui/core'
import { useForm } from 'react-hook-form'

const CustomTextField = ({ name, label, required }) => {

    // const { control } = useFormContext()

    const { register, handleSubmit } = useForm();


    return (
        <Grid item xs={12} sm={6}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {/* <label htmlFor={label}>{label}</label> */}
                <TextField required label={label} {...register(`${name}`, { maxLength: 20 })} />
            </div>

            {/* <Controller
                as={TextField}
                control={control}
                fullWidth
                name={name}
                label={label}
                required={required}
            /> */}
        </Grid>
    )
}

export default CustomTextField
