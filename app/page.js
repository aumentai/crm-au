export default function Home() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        
        <div style={card}>
          <h3>Leads</h3>
          <p>12</p>
        </div>

        <div style={card}>
          <h3>Vendas</h3>
          <p>R$ 3.200</p>
        </div>

        <div style={card}>
          <h3>Conversão</h3>
          <p>18%</p>
        </div>

      </div>
    </div>
  );
}

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "150px",
};
