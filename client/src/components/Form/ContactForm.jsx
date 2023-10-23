import { PrimaryTextField } from "@/MUIComponents/PrimaryTextField";
import {
  EmailRounded,
  AssignmentIndRounded,
  SubjectRounded,
  MessageRounded,
} from "@mui/icons-material";
import { Box, InputAdornment } from "@mui/material";
import React from "react";
import LoadButton from "../LoadButton/LoadButton";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";

const ContactForm = ({ loading, formik }) => {
  return (
    <>
      <Box className={`grid jcs aic g30 name_and_email_inputs`}>
        <PrimaryTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AssignmentIndRounded
                  sx={{ color: (theme) => theme.palette.primary.main }}
                />
              </InputAdornment>
            ),
          }}
          variant="standard"
          fullWidth
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <PrimaryTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailRounded
                  sx={{ color: (theme) => theme.palette.primary.main }}
                />
              </InputAdornment>
            ),
          }}
          variant="standard"
          fullWidth
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Box>
      <PrimaryTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SubjectRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
            </InputAdornment>
          ),
        }}
        variant="standard"
        fullWidth
        id="subject"
        type="text"
        name="subject"
        placeholder="Subject"
        value={formik.values.subject}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.subject && Boolean(formik.errors.subject)}
        helperText={formik.touched.subject && formik.errors.subject}
      />
      <PrimaryTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MessageRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
            </InputAdornment>
          ),
        }}
        variant="standard"
        fullWidth
        id="message"
        name="message"
        placeholder="Message"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />
      <LoadButton loading={loading}>
        <PrimaryButton variant="contained" fullWidth type="submit">
          Send
        </PrimaryButton>
      </LoadButton>
    </>
  );
};

export default ContactForm;
