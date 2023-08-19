const Card = ({ key, url, img, title, description, recreatedUrl }) => {
  return (
    <div className="card" key={key}>
      <a href={url} className="card-image" target="blank">
        <img src={img} alt={title} />
      </a>
      <a href={url} target="blank">
        <h3 className="card-title">{title}</h3>
      </a>
      <div className="card-desc">
        <p>{description}</p>
      </div>
      <div className="card-footer">
        {recreatedUrl ? (
          <p>
            recreated from{" "}
            <a href={recreatedUrl} className="text-blue-500">
              here
            </a>
          </p>
        ) : (
          <p>
            created by{" "}
            <a href="https://github.com/mkhotamirais" className="text-blue-500">
              me
            </a>
          </p>
        )}
      </div>
    </div>
  );
};
Card.propTypes;

export default Card;
