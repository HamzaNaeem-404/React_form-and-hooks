import './post.css'
const Post = (props) => {
    return (
        <>
          {props.data.map((elem) => {
            return (
              <div className="post">
                <h1>{elem.title}</h1>
                <p>{elem.description}</p>
                <img src={elem.image} alt="Not Found" width="150" height="150" />
              </div>
            );
          })}
        </>
      );
}

export default Post;
