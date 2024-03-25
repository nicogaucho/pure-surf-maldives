import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000/";

export const pureSurfContactEmail = ({
  name,
  email,
  plans,
  message
}) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Img
            src={``}
            widt={200}
            height={100}
            alt="pure surf logo"
          />
          <Section>
            <Text style={text}>Hi Pure Blue Surf&Yoga retreat Maldives,</Text>
            <Text style={text}>
              Someone recently requested staying in Pure Blue Surf&Yoga retreat Maldives.
            </Text>
            <Text style={text}>
              Find the contact right below:
            </Text>
            <Text style={text}>
              Name received: {name} <br />
              Email recived: {email} <br />
              Plan received: {plans} <br />
              Message received: {message}  
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};


const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "50px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};
