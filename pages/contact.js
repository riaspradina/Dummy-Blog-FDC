import ContactForm from "@/components/contact/contact-form";
import Head from "next/head";
import { Fragment } from "react";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>FDC Dental Clinic</title>
        <meta name="description" content="FDC Dental Clinic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
export default ContactPage;
