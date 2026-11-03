import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PromoPopup() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("tumiPromoSeen");

    if (hasSeenPopup) {
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isVisible]);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem("tumiPromoSeen", "true");
  };

  const handleBooking = () => {
    closePopup();
    navigate("/booking");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="promo-overlay"
      onClick={closePopup}
      role="presentation"
    >
      <div
        className="promo-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="promo-close"
          onClick={closePopup}
          aria-label="Close promotion"
        >
          ×
        </button>

        <p className="section-label">WELCOME TO TUMI THE BARBER</p>

        <h2 id="promo-title">
          CLEAN CUTS.
          <br />
          <span>CONFIDENCE. CULTURE.</span>
        </h2>

        <p className="promo-text">
          Book your chair with Tumi, or call
          <strong> 063 017 6952</strong> to secure your slot.
        </p>

        <button
          type="button"
          className="btn btn-primary promo-book"
          onClick={handleBooking}
        >
          BOOK YOUR CHAIR →
        </button>

        <button
          type="button"
          className="promo-later"
          onClick={closePopup}
        >
          Maybe Later
        </button>
      </div>
    </div>
  );
}

export default PromoPopup;