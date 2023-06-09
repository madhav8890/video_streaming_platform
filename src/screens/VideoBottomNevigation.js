import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function VideoBottomNevigation(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{boxShadow:"none"}}>
        <h2 style={{paddingLeft:'20px'}}>{props.data.title}</h2>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.data.userPic}
          </Avatar>
        }

        action={
          
         <Stack direction="row" spacing={2}>
         <Chip label="Subscribe" variant="outlined"  />
         <Chip label="👍Like" variant="outlined" />
         <Chip label="👎Dislike" variant="outlined" />
         <Chip label="Share➥" variant="outlined" />
         <Chip label="⬇ Download" variant="outlined" deleteIcon={<MoreVertIcon />} />

        </Stack>
         
        }
        title={props.data.name}
        subheader={props?.data.time ? new Date(props.data.time).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'}).replace(/ /g, ' '): ""}
      />
        {/* <Button variant="outlined">Primary</Button> */}
     
     
      
    </Card>
  );
}