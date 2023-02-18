function ItemCard(props) {
  let id = props.id; // id varaible for test
  return (
    <div className={"project-" + props.id}>
      <h2>Dynamic {props.id}</h2>
      <p>Contents</p>
      <div>
        <a className="site-link" href={"/tools/" + id}>
          Link
        </a>
        <a className="code-link" href="#">
          Code
        </a>
      </div>
    </div>
  );
}

export default ItemCard;
