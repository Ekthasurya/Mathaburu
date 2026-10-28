import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "7384804148";
  const message = "Hello! I would like to chat with you.";
  const countryCode = "91";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${countryCode}${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      id="whatsapp"
      onClick={handleWhatsAppClick}
      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold
                 px-4 py-2 rounded-md transition-colors duration-200"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp size={20} />
    </button>
  );
};

export default WhatsAppButton;
