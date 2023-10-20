import React from "react";
import styles from "./ContactMap.module.scss";

const ContactMap = () => {
  return (
    <iframe
      className={`${styles.contact_map}`}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.0751866639287!2d31.322505038701287!3d30.089879443725216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e26d489ab9d%3A0xd0fde795a22a1910!2sAl%20Cazar!5e0!3m2!1sen!2seg!4v1697703418135!5m2!1sen!2seg"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default ContactMap;
