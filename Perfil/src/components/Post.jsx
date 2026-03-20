import "../styles/Post.css";

function Post({ title, content, date }) {
  return (
    <article className="post-card">
      <div className="post-top">
        <div className="post-avatar">RC</div>

        <div>
          <h3>Riny Contabilidade</h3>
          <span>{date}</span>
        </div>
      </div>

      <h4>{title}</h4>
      <p>{content}</p>

      <div className="post-actions">
        <button>Curtir</button>
        <button>Comentar</button>
        <button>Compartilhar</button>
      </div>
    </article>
  );
}

export default Post;
