import './Welcome.css';


function Welcome(props){
    return (
      <div className='welcomebackdrop'>
        <div className='welcomemodal'>
          <h1>Welcome to Terralogic-meet</h1>
          <button className='welcomebutton' onClick={props.onclosewelcome}>Okay</button>
        </div>
      </div>
    );
}
export default Welcome;