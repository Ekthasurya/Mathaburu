import React from "react";
import { Button } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "7384804148"; 
  const message = "Hello! I would like to chat with you.";
   // Pre-filled message
   const countryCode = "91";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${countryCode}${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
    id="whatsapp"
      leftIcon={<FaWhatsapp />}
      colorScheme="green"
      onClick={handleWhatsAppClick}
    >
    
    </Button>
  );
};

export default WhatsAppButton;
