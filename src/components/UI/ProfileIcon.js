import classes from './ProfileIcon.module.css';

const ProfileIcon = (props)=>{
    return (    
            <img src={`${props.url}`}/>
    )
};

export default ProfileIcon;