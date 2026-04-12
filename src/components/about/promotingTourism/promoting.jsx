
import style from './promoting.module.css'
const promoting = () => {
    const promoting=[
      {img:"images/about/promoting/1.webp"},
      {img:"images/about/promoting/2.webp"},
      {img:"images/about/promoting/3.webp"},
    ]
  return (
    <div className={style.promoting_container}>
        <h1>Promoting Tourism</h1>
        <div className={style.image_container}>
        {promoting.map((promote,index)=>(
          <img className={style.img_promote} key={index} src={promote.img} alt="" />
        ))}
        </div>
      </div>
  )
}

export default promoting
