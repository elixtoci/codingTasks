import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import './ProductsPage.css';


const products = [
  { id: 1, title: 'Kiwi', description: 'Baby Tee', price: 20.00, imageUrl: 'https://inprintwetrust.co/cdn/shop/products/kiwi-baby-tee-in-print-we-trust-608411.jpg?v=1713698206&width=400', colors: ['Red', 'Blue', 'Green'] },
  { id: 2, title: 'Hollywood Star', description: 'Baby Tee', price: 20.00, imageUrl: 'https://inprintwetrust.co/cdn/shop/products/hollywood-star-custom-baby-tee-in-print-we-trust-213933.jpg?v=1713721648&width=400', colors: ['Red', 'Blue', 'Green'] },
  { id: 3, title: 'Cruising', description: 'Baby Tee', price: 20.00, imageUrl: 'https://inprintwetrust.co/cdn/shop/products/cruising-baby-tee-in-print-we-trust-149110.jpg?v=1713697946&width=400', colors: ['Red', 'Blue', 'Green'] },
  { id: 4, title: 'Backseat Driver', description: 'Baby Tee', price: 20.00, imageUrl: 'https://inprintwetrust.co/cdn/shop/products/backseat-driver-baby-tee-in-print-we-trust-107765.jpg?v=1713722405&width=400', colors: ['Red', 'Blue', 'Green'] },
  { id: 5, title: 'Cowboy', description: 'Baby Tee', price: 20.00, imageUrl: 'https://inprintwetrust.co/cdn/shop/products/cowboy-baby-tee-in-print-we-trust-342288.jpg?v=1713698680&width=400', colors: ['Red', 'Blue', 'Green'] },
  { id: 6, title: 'Give Me A Kiss', description: 'Baby Tee', price: 20.00, imageUrl: 'https://inprintwetrust.co/cdn/shop/files/give-me-a-kiss-baby-tee-in-print-we-trust-147593.jpg?v=1713698145&width=400', colors: ['Red', 'Blue', 'Green'] },
  { id: 7, title: 'Garden', description: 'Baby Tee', price: 20.00, imageUrl: 'https://inprintwetrust.co/cdn/shop/products/from-the-garden-baby-tee-in-print-we-trust-234230.jpg?v=1713696629&width=400', colors: ['Red', 'Blue', 'Green'] },
  { id: 8, title: 'One-Way Ticket', description: 'Baby Tee', price: 20.00, imageUrl: 'https://inprintwetrust.co/cdn/shop/products/one-way-ticket-baby-tee-in-print-we-trust-482589.jpg?v=1713722619&width=400', colors: ['Red', 'Blue', 'Green'] },
  { id: 9, title: 'Fruit-Man', description: 'Baby Tee', price: 20.00, imageUrl: 'https://inprintwetrust.co/cdn/shop/products/fruit-man-baby-tee-in-print-we-trust-689304.jpg?v=1713723118&width=400', colors: ['Red', 'Blue', 'Green'] },
  { id: 10, title: 'Cheers', description: 'Baby Tee', price: 20.00, imageUrl: 'https://inprintwetrust.co/cdn/shop/products/cheers-baby-tee-in-print-we-trust-338385.jpg?v=1713725833&width=400', colors: ['Red', 'Blue', 'Green'] },
];

const ProductsPage = ({ onBuy }) => {
  const [selectedColors, setSelectedColors] = useState({});

  const handleSelectColor = (productId, color) => {
    setSelectedColors({ ...selectedColors, [productId]: color });
  };

  const handleBuyClick = (price) => {
    onBuy(price);
  };


  return (
    <Container className="products-container">
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.imageUrl} alt={product.title} className="product-image" />
              <Card.Body>
                <Card.Title className="product-title">{product.title}</Card.Title>
                <Card.Text className="product-description">{product.description}</Card.Text>
                <Card.Text className="product-price"><strong>Price: ${parseFloat(product.price).toFixed(2)}</strong></Card.Text>
                <DropdownButton
                  id={`dropdown-button-${product.id}`}
                  title={selectedColors[product.id] || 'Select color'}
                  onSelect={(eventKey) => handleSelectColor(product.id, eventKey)}
                >
                  {product.colors.map((color) => (
                    <Dropdown.Item key={color} eventKey={color}>{color}</Dropdown.Item>
                  ))}
                </DropdownButton>
                <br></br>
                <Button variant="primary" className="buy-button" onClick={() => handleBuyClick(product.price)}>Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsPage;
