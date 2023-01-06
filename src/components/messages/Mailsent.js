import './Mailsent.css';


function Mailsent(props){
    return (
      <div className="mailsent-backdrop">
        <div className='mailsent'>
          <h1>Mail sent Successfully.....</h1>
          <button className="mailsent-button" onClick={props.closemail}>Okay</button>
        </div>
      </div>
    );
}
export default Mailsent;