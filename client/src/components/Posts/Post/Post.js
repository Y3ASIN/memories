import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";

import styles from "./styles";

const Post = ({ post }) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div style={styles.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {" "}
          {moment(post.createdAt).fromNow()}{" "}
        </Typography>
      </div>
      <div style={styles.overlay2}>
        <Button sx={{ color: "white" }} size="small" onClick={() => {}}>
          {" "}
          <MoreHorizIcon fontSize="default" />{" "}
        </Button>
      </div>
      <div style={styles.details}>
        <Typography variant="body2" color="textSecondary">
          {" "}
          {post.tags.map((tag) => `#${tag} `)}{" "}
        </Typography>
      </div>
      <CardContent>
        <Typography sx={styles.title} variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
