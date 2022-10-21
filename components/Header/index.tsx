import { Grid, TextField, IconButton, Badge, Divider } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/PersonOutline'
import ShoppingCartOutlineIcon from '@mui/icons-material/ShoppingCartOutlined'
import Link from 'next/Link'
import NavBar from './NavBar'

const Header = () => {
  return (
    <>
    <Grid container alignItems={'center'}>
      <Grid xs={4} justifyContent="center" container>
        <Link href="/logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-8-circle"
            viewBox="0 0 16 16"
          >
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-5.03 1.803c0 1.394-1.218 2.355-2.988 2.355-1.763 0-2.953-.955-2.953-2.344 0-1.271.95-1.851 1.647-2.003v-.065c-.621-.193-1.33-.738-1.33-1.781 0-1.225 1.09-2.121 2.66-2.121s2.654.896 2.654 2.12c0 1.061-.738 1.595-1.336 1.782v.065c.703.152 1.647.744 1.647 1.992Zm-4.347-3.71c0 .739.586 1.255 1.383 1.255s1.377-.516 1.377-1.254c0-.733-.58-1.23-1.377-1.23s-1.383.497-1.383 1.23Zm-.281 3.645c0 .838.72 1.412 1.664 1.412.943 0 1.658-.574 1.658-1.412 0-.843-.715-1.424-1.658-1.424-.944 0-1.664.58-1.664 1.424Z" />
          </svg>
        </Link>
      </Grid>
      <Grid
        xs={4}
        justifyContent="center"
        container
        sx={{ position: 'relative' }}
      >
        <TextField
          id="standard-basic"
          label="Search..."
          variant="standard"
          fullWidth={true}
        />
        <IconButton
          aria-label="delete"
          sx={{ position: 'absolute', right: 0, top: 10 }}
        >
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid xs={4} container justifyContent="center">
        <IconButton aria-label="delete">
          <PersonIcon></PersonIcon>
        </IconButton>

        <Badge badgeContent={4} color="primary">
          <IconButton aria-label="delete">
            <ShoppingCartOutlineIcon></ShoppingCartOutlineIcon>
          </IconButton>
        </Badge>
      </Grid>
      
    </Grid>
    <Divider sx={{marginTop:3}} variant='fullWidth' />
    <NavBar/>
    </>
  )
}

export default Header