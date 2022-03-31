import Card from "../UI/Card";
import ProfileIcon from "../UI/ProfileIcon";
import classes from './Post.module.css';

const Post = (props)=>{
    const imgUrl = "https://avatars.githubusercontent.com/u/15192824?v=4"
    return(
        <Card>
           <div className={classes.feed_shared}>
               <div>
                   <ProfileIcon url={imgUrl}>{props.children}</ProfileIcon>
               </div>
               <div>
                   <span>
                       <span></span>
                       <span></span>
                   </span>
                   <span></span>
                   <span></span>
               </div>

           </div>
        
      </Card>
    )
};

export default Post;