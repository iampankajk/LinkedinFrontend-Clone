import Card from "../UI/Card";
import ProfileIcon from "../UI/ProfileIcon";
import classes from './Post.module.css';

const Post = (props)=>{
    const imgUrl = "https://avatars.githubusercontent.com/u/15192824?v=4"
    return(
        <Card>
            <div className={classes.header}>
                <ProfileIcon url={imgUrl}>{props.children}</ProfileIcon>
                <div>
                    <span>
                        <span>Pankaj Kumar</span>
                        <span>2nd+</span>
                    </span>
                </div>
            </div>
        
      </Card>
    )
};

export default Post;