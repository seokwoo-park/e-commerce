import React, { useEffect, useState } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { commerce } from '../../library/commerce'

import CustomTextField from './CustomTextField'

const AddressForm = ({ checkoutToken, next }) => {
    const {handleSubmit, register} = useForm()

    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState('')
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState([])


    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)

        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
    }
    const countries = Object.entries(shippingCountries).map(([ code, name ])=> ({ id: code, label: name}))
    const subdivisions = Object.entries(shippingSubdivisions).map(([ code, name ])=> ({ id: code, label: name}))
    const options = shippingOptions.map((option)=> ({ id: option.id, label: `${option.description} - (${option.price.formatted_with_symbol})`}))
    

    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)

        setShippingSubdivisions(subdivisions)
        setShippingSubdivision(Object.keys(subdivisions)[0])
    } 

    const fetchShppingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })

        setShippingOptions(options)
        setShippingOption(options[0].id)
    }


    useEffect(()=>{
        fetchShippingCountries(checkoutToken.id)
    },[])

    useEffect(()=>{
        if(shippingCountry)fetchSubdivisions(shippingCountry)
    }, [shippingCountry])

    useEffect(()=>{
        if(shippingSubdivision) fetchShppingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
    }, [shippingSubdivision])

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider >
                <form onSubmit={handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
                    <Grid container spacing={3}>
                        <CustomTextField required name='firstName' label='First Name'/>
                        <CustomTextField required name='lastName' label='Last Name'/>
                        <CustomTextField required name='email' label='Email'/>
                        <CustomTextField required name='address1' label='Address '/>
                        <CustomTextField required name='city' label='City'/>
                        <CustomTextField required name='zaip' label='Postal Code'/>
                         <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e)=>setShippingCountry(e.target.value)}>
                                {countries.map((country) => (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>

                         <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Region Detail</InputLabel>
                            <Select value={shippingSubdivision} fullWidth onChange={(e)=>setShippingSubdivision(e.target.value)}>
                                {subdivisions.map((subdivision) => (
                                    <MenuItem key={subdivision.id} value={subdivision.id}>
                                        {subdivision.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                      
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e)=> setShippingOption(e.target.value)}>
                                {options.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>
                                            {option.label}
                                        </MenuItem>
                                ))}
                            </Select>
                        </Grid> 
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                            <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
                            <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </React.Fragment>
    )
}

export default AddressForm
