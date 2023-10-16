import { IconButton } from "@mui/material";
import React from "react";
import logo from "../../images/logo.png";
import logoWithText from "../../images/logo_with_text.webp";
import Image from "next/image";
import styles from "./Logo.module.scss";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Logo = ({ text }) => {
  return (
    <Link href={`${process.env.NEXT_PUBLIC_HOME_PAGE}`}>
      <IconButton className={`flex jcc aic ${styles.logo}`}>
        <LazyLoadImage
          alt={"logo"}
          height={100}
          src={text ? logoWithText.src : logo.src}
          width={100}
        />
      </IconButton>
    </Link>
  );
};

export default Logo;
