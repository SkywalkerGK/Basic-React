import './Tattooitem.css';
function Tattooitem(props){
  const { tattoo } = props;
    return (
        <div className='tattoo-item'>
        <img src={tattoo.thumbnailUrl} />
        <h4>{tattoo.title}</h4>
      </div>
    );
}
export default Tattooitem;