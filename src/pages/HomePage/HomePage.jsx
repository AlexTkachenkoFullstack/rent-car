import { Container, FinalText, ItemServices, ItemServicesLast, ListServices, Text, TextLast, Title, TitleH3} from "./HomePage.styled";

const HomePage = () => {
    return (
            <Container >
              <Title>About RentCar LTD</Title>
              <TitleH3>A little history</TitleH3>
              <Text>
                  Inspiration and a passion for automobiles were the roots from which RentCar LTD emerged. The exact date of our company's founding was March 21, 2008 when the first cars owned by the company founders were put up for sale. These cars were stored in garages, and advertisements about their sale were placed in the local press and among acquaintances.
              </Text>
              <Text>
                  Since then, our company has undergone many changes, both ups and downs, and at the present moment, it tirelessly works to make car rental simple, convenient, and accessible to people worldwide. Our aspiration to create the best car rental experience knows no bounds. We take pride in offering our customers a wide range of options, from compact cars to luxurious SUVs, so that everyone can find the perfect vehicle for their adventure.
              </Text>
              <Text>
                  We understand that every journey begins the moment you get behind the wheel. That's why we pay attention to every detail to make your trip unforgettable. Our team is dedicated to ensuring your safety and comfort on the road. We take pride in our high service standards and attention to detail, allowing us to build long-term relationships with our customers.
              </Text>
              <TextLast>
                  Today, RentCar LTD is not just a car rental company. It's a story of passion, adventure, and a desire to make the world more accessible. We invite you to join us on our journey and hope to share with you the incredible freedom that can be found behind the wheel of each of our cars.
              </TextLast>
              <TitleH3>What can we offer you</TitleH3>
              <TextLast>We offer a wide selection of rental cars at the most competitive prices. Whether you need a car for a business trip, vacation, or a special event, we have the perfect solution. Use our convenient search tool to find the car that suits your needs. Our advantages include reliability, quality, and simplicity in renting. We make car rental easy and accessible.</TextLast>
              <ListServices>Our services:
                <ItemServices>Diverse car selection: We have cars of various classes and brands to satisfy diverse customer needs.</ItemServices>
                <ItemServices>Short-term and long-term rental: We offer flexible rental terms, including short-term rentals for a few days and long-term contracts for extended trips.</ItemServices>
                <ItemServices>Driver rental: If you need a professional driver, we provide car rental services with experienced drivers.</ItemServices>
                <ItemServices>Car delivery: We can deliver your selected car directly to your location, making the rental process even more convenient.</ItemServices>
                <ItemServices>Car insurance: We offer various insurance options for your safety and peace of mind during your trip.</ItemServices>
                <ItemServices>Technical support: In case of any technical issues with the car, our specialists are ready to assist you and provide a replacement.</ItemServices>
                <ItemServices>GPS navigation: All our cars are equipped with GPS navigation to help you easily reach your destination.</ItemServices>
                <ItemServices>Additional equipment rental: We offer additional equipment such as child seats, roof racks, and tire chains to make your journey more comfortable.</ItemServices>
                <ItemServicesLast>Discounts and promotions: We regularly provide discounts and promotional offers to make renting even more cost-effective.</ItemServicesLast>
              </ListServices>
              <FinalText>
                  Customer experience and satisfaction are our greatest assets. We take pride in helping you achieve your goals and ensuring a comfortable and worry-free journey. For any questions or inquiries, please don't hesitate to contact us. Find your perfect car with RentCar LTD today!
              </FinalText>

            </Container>
    );
  };
  
  export default HomePage;