import "./directory-item.style.scss"

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, } = category;
  return (
    <div key={category.id} className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }} />
      {/* <img/> */}
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>)
}

export default DirectoryItem;