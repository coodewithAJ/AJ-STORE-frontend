import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../responsive";


const Container = styled.div`
    display:flex;
    ${mobile({flexDirection:"column"})}
    
    
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
`;
const Desc = styled.p`
    margin: 20px 0px;
    font-size: 13px;
`;
const SocialContainer = styled.div`
    display:flex;
`;
const SocialIcon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: white;
    background-color: gray;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: 20px;
`;
const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({display:"none"})}
    
`
const Title =  styled.h3`
    margin-bottom: 30px;

`
const List =  styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    
`
const ListItem =  styled.li`
    width: 50%;
    margin-bottom: 10px;
    text-decoration: underline;
    
`
const Right = styled.div`
    flex:1;
    padding: 20px;
`;
const ContactItem = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    
`
const Payment = styled.img`
    height: 60px;
    width: 40%;
    
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>AJ-STORE</Logo>
            <Desc>Everyone knows that AJ-STORE denim heritage goes deep, right back to the working cowboy. So, making jeans that are durable and comfortable enough for the wild frontier is a given for us.</Desc>
            <SocialContainer>
                <SocialIcon>
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon>
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon>
                    <TwitterIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>About Us</ListItem>
                <ListItem>Collections</ListItem>
                <ListItem>Contact Us</ListItem>
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Return Policy</ListItem>
                <ListItem>Shipping Policy</ListItem>
                <ListItem>Warranty Policy</ListItem>
                <ListItem>Terms & Conditions</ListItem>
                <ListItem>Returns</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><LocationOnIcon style={{marginRight:"10px"}}/>D-16 Delhi india</ContactItem>
            <ContactItem><LocalPhoneIcon style={{marginRight:"10px"}}/>+919876675434</ContactItem>
            <ContactItem><EmailIcon style={{marginRight:"10px"}}/>contact@gmail.com</ContactItem>
           

        </Right>
      
    </Container>
  )
}

export default Footer
