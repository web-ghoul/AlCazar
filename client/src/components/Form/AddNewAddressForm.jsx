import React, { useEffect, useState } from "react";
import LoadButton from "../LoadButton/LoadButton";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { PrimaryTextField } from "@/MUIComponents/PrimaryTextField";
import { Box, InputAdornment } from "@mui/material";
import {
    ContactMail,
    Flag,
    Phone,
    SouthAmerica,
    TitleRounded,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "@/store/countriesSlice";
import { getCities } from "@/store/citiesSlice";

const AddNewAddressForm = ({ loading, formik }) => {
    const dispatch = useDispatch();
    const [city, setCity] = useState()
    const { countries } = useSelector((state) => state.countries)
    const { cities } = useSelector((state) => state.cities)
    useEffect(() => {
        dispatch(getCountries())
        dispatch(getCities({ country: formik.values.country }))
        setCity(cities.length > 0 ? cities[0] : "")
        formik.values.city = cities[0]
    }, [dispatch, formik, cities])
    return (
        <>
            <PrimaryTextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <TitleRounded
                                sx={{ color: (theme) => theme.palette.primary.main }}
                            />
                        </InputAdornment>
                    ),
                }}
                type={"text"}
                variant="standard"
                fullWidth
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <PrimaryTextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <TitleRounded
                                sx={{ color: (theme) => theme.palette.primary.main }}
                            />
                        </InputAdornment>
                    ),
                }}
                type={"text"}
                variant="standard"
                fullWidth
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <PrimaryTextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Phone
                                sx={{ color: (theme) => theme.palette.primary.main }}
                            />
                        </InputAdornment>
                    ),
                }}
                type={"text"}
                variant="standard"
                fullWidth
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
            />
            <PrimaryTextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <ContactMail
                                sx={{ color: (theme) => theme.palette.primary.main }}
                            />
                        </InputAdornment>
                    ),
                }}
                type={"text"}
                variant="standard"
                fullWidth
                id="address"
                name="address"
                placeholder="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
            />
            <Box className={`flex jcs aic g30 flex_wrap`}>
                <PrimaryTextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Flag
                                    sx={{ color: (theme) => theme.palette.primary.main }}
                                />
                            </InputAdornment>
                        ),
                    }}
                    id="country"
                    name="country"
                    select
                    fullWidth
                    SelectProps={{
                        native: true,
                    }}
                    variant="standard"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.country && Boolean(formik.errors.country)}
                    helperText={formik.touched.country && formik.errors.country}
                >
                    {
                        countries.map((country, i) => (
                            <option key={i} value={country}>
                                {country}
                            </option>
                        ))
                    }
                </PrimaryTextField>
                <PrimaryTextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SouthAmerica
                                    sx={{ color: (theme) => theme.palette.primary.main }}
                                />
                            </InputAdornment>
                        ),
                    }}
                    id="city"
                    name="city"
                    select
                    fullWidth
                    SelectProps={{
                        native: true,
                    }}
                    variant="standard"
                    value={city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                >
                    {
                        cities.map((city, i) => (
                            <option key={i} value={city}>
                                {city}
                            </option>
                        ))
                    }
                </PrimaryTextField>
            </Box>
            <Box className={`grid jcs aic g10`}>
                <LoadButton loading={loading}>
                    <PrimaryButton fullWidth type="submit">
                        Add
                    </PrimaryButton>
                </LoadButton>
            </Box>
        </>
    );
};

export default AddNewAddressForm;
