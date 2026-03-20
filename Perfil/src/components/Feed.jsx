import Post from "./Post";
import "../styles/Feed.css";

function Feed() {
  const posts = [
    {
      title: "Prazo de envio do DAS",
      content:
        "Lembrete para microempreendedores: acompanhar os vencimentos mensais evita juros, multa e pendências fiscais.",
      date: "Hoje",
    },
    {
      title: "Organização financeira empresarial",
      content:
        "Separar contas pessoais das contas da empresa é um passo essencial para uma gestão contábil mais clara e segura.",
      date: "Ontem",
    },
    {
      title: "Planejamento tributário",
      content:
        "Uma análise correta do regime tributário pode reduzir custos e melhorar a saúde financeira do negócio.",
      date: "2 dias atrás",
    },
  ];

  return (
    <section className="feed">
      <div className="feed-header-card">
        <h2>Publicações</h2>
      </div>

      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          content={post.content}
          date={post.date}
        />
      ))}
    </section>
  );
}

export default Feed;
