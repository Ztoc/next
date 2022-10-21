import {Link,Grid,Box} from '@mui/material';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

const NavBar = () =>{
  return (
    <Box   sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'start',
      typography: 'body1',
      '& > :not(style) + :not(style)': {
        ml: 2,
      },
    }}
    onClick={preventDefault}
    >
      <Link href='#' underline='hover'>
        CLOTH
      </Link>
      <Link href='#' underline='hover'>
        TROUSER     
      </Link>
      <Link href='#' underline='hover'>
        SHIRT
      </Link>
      
      <Link href='#' underline='hover'>
        GLASS
      </Link>
      <Link href='#' underline='hover'>
        SHOE
      </Link>
    </Box>
  )
}

export async function getStaticProps(){
  
}

export default NavBar;