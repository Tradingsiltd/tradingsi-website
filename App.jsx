import React from "react";

export default function App() {
  return (
    <div style={{fontFamily: "Arial, sans-serif", background:"#f1f5f9", color:"#0f172a"}}>
      <header style={{background:"#0f172a", color:"white", padding:"40px 20px", textAlign:"center"}}>
        <img src="/logo.png" alt="TRADING SI LTD" style={{height:"80px"}}/>
        <h1 style={{marginTop:"20px"}}>TRADING SÌ LTD</h1>
        <p>International trading of fuels, lubricants and additives</p>
      </header>

      <section style={{padding:"60px 20px", maxWidth:"900px", margin:"auto", textAlign:"center"}}>
        <h2>About Us</h2>
        <p>
          TRADING SÌ LTD operates in the international petroleum products market,
          specializing in fuels, industrial lubricants and high-performance additives.
        </p>
      </section>

      <section style={{background:"#e2e8f0", padding:"60px 20px", textAlign:"center"}}>
        <h2>Contact</h2>
        <p>Email: info@tradingsi.eu</p>
        <p>Purchasing: purchese@tradingsi.eu</p>
        <p>Sales: sales@tradingsi.eu</p>
        <p>
          WhatsApp: 
          <a href="https://wa.me/359882942626" target="_blank">
            +359 882 942 626
          </a>
        </p>
        <p>
          Bul. Mariya Luiza 28, floor 3, ap.2<br/>
          BG-1233 Sofia, Bulgaria<br/>
          VAT: BG206740568
        </p>
      </section>

      <footer style={{background:"#0f172a", color:"white", textAlign:"center", padding:"20px"}}>
        © 2026 TRADING SÌ LTD - All rights reserved
      </footer>
    </div>
  );
}
