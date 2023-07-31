import './Tattooitem.css';
function Tattooitem(props){
  const { title , thumbnailUrl } = props;
    return (
        <div className='tattoo-item'>
        <img src={thumbnailUrl} />
        <h4>{title}</h4>
      </div>
    );
}
export default Tattooitem;