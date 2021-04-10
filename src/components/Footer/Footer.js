import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_top"></div>
      <div className="footer_bottom">
        <h4>@Carmuv 2021</h4>
        <div className="footer_bottom-terms">
          <h4>Términos y condiciones</h4>
          <h4>Políticas de privacidad</h4>
        </div>
        <div className="footer_bottom-socialmedia">
          <h4>Seguinos en nuestras redes</h4>
        </div>
      </div>
    </div>
  );
}
