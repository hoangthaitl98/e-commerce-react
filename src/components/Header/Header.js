import { Col, Row } from "antd";
import Search from "antd/lib/transfer/search";

function Header() {
    return <div>
        <Row>
            <Col md={8}>E-Commerce</Col>
            <Col md={8}>
                <Search placeholder="Search"></Search>
            </Col>
            <Col md={8}>
                <Row>
                    <Col md={12}>Your Cart</Col>
                    <Col md={12}>Login</Col>
                </Row>
            </Col>
        </Row>
    </div>;
}

export default Header;