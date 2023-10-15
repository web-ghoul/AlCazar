import { IconButton } from "@mui/material";
import React from "react";
import logo from "../../../public/images/logo.png";
import logoWithText from "../../../public/images/logo_with_text.webp";
import Image from "next/image";
import styles from "./Logo.module.scss";
import Link from "next/link";

const Logo = ({ text }) => {
  return (
    <Link href={`${process.env.NEXT_PUBLIC_HOME_PAGE}`}>
      <IconButton className={`flex jcc aic ${styles.logo}`}>
        <Image
          width={100}
          height={100}
          loading="lazy"
          alt={"logo"}
          src={text ? logoWithText : logo}
        />
      </IconButton>
    </Link>
  );
};

export default Logo;
