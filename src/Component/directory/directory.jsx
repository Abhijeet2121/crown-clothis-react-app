import './directory.style.scss'
import DirectoryItem from '../diretory-item/directory-tem';


const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory;