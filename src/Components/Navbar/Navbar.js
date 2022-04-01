import Logo from "../Global/Logo";
import Search from "../Global/SearchComponent";
import { Home } from "@material-ui/icons";
import { Message } from "@material-ui/icons";
import { Notifications } from "@material-ui/icons";
import Grid_Navbar from "../Global/Grid_Navbar";
import { Work } from "@material-ui/icons";
 import { Group } from "@material-ui/icons";
 import { PostAdd } from "@material-ui/icons";
import './Navbar.css'


function Navbar() {
    return (
        <div className="navbar--">
          <div className='navbar--left'>
            <Logo />
        <Search /> 
        </div>

        <div className='navbar--right'>
      <div className='home icons'>
        <div>
        <Home  className='material-icons'/>
        </div>
      <div className='icon-text'>Home</div>

        </div>
        <div className='group icons' >
          <div>
        <Group className='material-icons'/>
        </div>
        <div className='icon-text'>My Network</div>
        </div>
    
        
        <div className='work icons'>
          <div>
        <Work className='material-icons'/>
        </div>
        <div className='icon-text'>Jobs</div>
        </div>
        
        <div className='message icons'>
          <div>
        <Message className='material-icons'/>
        </div>
        <div className='icon-text'>Message</div>
        </div>

       <div className='notification icons'>
         <div>
        <Notifications className='material-icons'/>
        </div>
        <div className='icon-text'>Notifications</div>
        </div>
      
    <div className='profile icons'>
        <div >
         <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFyGbbhMwdx8g/profile-displayphoto-shrink_200_200/0/1638850539412?e=1654128000&v=beta&t=v_2we1aS5QPTgxeO1SPUPPNYNuv6aliSomTxMR2OOJI" width='20px' height='20px'/>
        </div>
        <div className='icon-text'>Me</div>
        </div>


        <div className= 'grid icons'>
          <div>
        <Grid_Navbar className='material-icons'/>
        </div>
        <div className='icon-text'>Work</div>
        </div>

        <div className='post icons'>
          <div>
        <PostAdd className='material-icons'/>
        </div>
        <div className='icon-text'>Post a Job</div>
        </div>
      </div>
      </div>
    )
}

export default Navbar
