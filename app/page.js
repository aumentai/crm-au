export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        <div style={{ display: "flex", height: "100vh" }}>
          
          {/* SIDEBAR */}
          <aside
            style={{
              width: "220px",
              background: "#111",
              color: "#fff",
              padding: "20px",
            }}
          >
            <h2>AUMENTAI</h2>

            <nav style={{ marginTop: "30px" }}>
              <p>Dashboard</p>
              <p>Leads</p>
              <p>Clientes</p>
              <p>Configurações</p>
            </nav>
          </aside>

          {/* CONTEÚDO */}
          <main
            style={{
              flex: 1,
              background: "#f5f5f5",
              padding: "30px",
            }}
          >
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
