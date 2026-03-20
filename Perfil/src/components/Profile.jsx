import "../styles/Profile.css";

function Profile() {
  return (
    <section className="profile-card">
      <div className="profile-header"></div>

      <div className="profile-content">
        <div className="profile-avatar">RC</div>

        <h1>Riny Contabilidade</h1>
        <h2>Contador | Gestão Fiscal e Empresarial</h2>

        <p className="profile-bio">
          Atuação em contabilidade para empresas, MEI, Simples Nacional,
          planejamento tributário, folha de pagamento e consultoria financeira.
        </p>

        <div className="profile-info">
          <span>📍 Cambé - PR</span>
          <span>💼 Escritório Digital</span>
          <span>📊 Atendimento Empresarial</span>
        </div>

        <div className="profile-stats">
          <div>
            <strong>1.250</strong>
            <p>seguidores</p>
          </div>
          <div>
            <strong>320</strong>
            <p>conexões</p>
          </div>
          <div>
            <strong>87</strong>
            <p>publicações</p>
          </div>
        </div>

        <button className="contact-btn">Entrar em contato</button>
      </div>
    </section>
  );
}

export default Profile;
