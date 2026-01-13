import React from "react";

const App: React.FC = () => {
  return (
    <div style={styles.page}>
      <div style={styles.appContainer}>
        {/* Header */}
        <header style={styles.header}>
          <h2 style={styles.logo}>Kind Kidney</h2>
          <button style={styles.linkButton}>Sign In</button>
        </header>

        {/* Sign in and Get started */}
        <main style={styles.main}>
          <div style={styles.card}>
            <h1 style={styles.title}>
              Kidney Health,
              <br />
              made simple
            </h1>

            <p style={styles.text}>
              Scan products and understand ingredients
              (easy decisions every day).
            </p>

            <button style={{ ...styles.button, ...styles.primary }}>
              Get Started
            </button>

            <button style={{ ...styles.button, ...styles.soft }}>
              Explore
            </button>
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav style={styles.bottomNav}>
          <span style={{ ...styles.navItem, ...styles.active }}>Home</span>
          <span style={styles.navItem}>Explore</span>
          <span style={styles.navItem}>Help</span>
        </nav>
      </div>
    </div>
  );
};

export default App;

/* ---------- Styles ---------- */

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    fontFamily: "Poppins, system-ui, sans-serif",
  },

  appContainer: {
    width: 375,
    height: 812,
    background: "linear-gradient(180deg, #fff3ee, #ffe6dd)",
    borderRadius: 28,
    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },

  header: {
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    color: "#e07a5f",
    fontWeight: 600,
    fontSize: "1.2rem",
  },

  linkButton: {
    background: "none",
    border: "none",
    color: "#e07a5f",
    fontSize: "0.9rem",
    cursor: "pointer",
  },

  main: {
    flex: 1,
    padding: 24,
    display: "flex",
    alignItems: "center",
  },

  card: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
    borderRadius: 24,
    padding: "32px 24px",
    textAlign: "center",
  },

  title: {
    fontSize: "1.8rem",
    color: "#5a3b34",
    marginBottom: 14,
    lineHeight: 1.25,
  },

  text: {
    fontSize: "0.95rem",
    color: "#7a5a52",
    marginBottom: 28,
  },

  button: {
    width: "100%",
    padding: 14,
    borderRadius: 999,
    border: "none",
    fontSize: "1rem",
    cursor: "pointer",
    marginBottom: 12,
  },

  primary: {
    backgroundColor: "#e07a5f",
    color: "#fff",
  },

  soft: {
    backgroundColor: "#ffe1d8",
    color: "#c85f49",
  },

  bottomNav: {
    display: "flex",
    justifyContent: "space-around",
    padding: "16px 0",
    backgroundColor: "#ffffff",
    borderTop: "1px solid #f0d6cd",
  },

  navItem: {
    fontSize: "0.85rem",
    color: "#b0897f",
  },

  active: {
    color: "#e07a5f",
    fontWeight: 600,
  },
};
