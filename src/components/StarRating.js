import { Box, makeStyles } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const StarRating = ({ stars }) => {
  const classes = useStyles();

  // Customize the colors for empty, filled, and hover states
  const emptyIcon = <StarIcon style={{ color: '#313591' }} />;
  const filledIcon = <StarIcon style={{ color: 'gold' }} />;


  return (
    <div>
      <Box component="fieldset" className={classes.box}>
        <Rating
          name="read-only"
          readOnly
          value={stars}
          emptyIcon={emptyIcon}
          icon={filledIcon}
        />
      </Box>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  box: {
    borderColor: "transparent",
  },
}))

export default StarRating;