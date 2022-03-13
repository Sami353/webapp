import "./login.css";

function PopUp(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popupInner">
            <button onClick={()=> props.setTrigger(false)} className='closeButton'>Close</button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default PopUp
