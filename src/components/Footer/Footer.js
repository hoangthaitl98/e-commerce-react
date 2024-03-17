import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Copyright } from "@mui/icons-material";
import BoCongThuong from "../../asset/images/bocongthuong_1.png";
import Visa from "../../asset/images/payment_1.png";
import MasterCart from "../../asset/images/payment_2.png";
import ZaloPay from "../../asset/images/payment_3.png";
import FacebookIcon from "../../asset/images/social_facebook_icon.svg";
import InstaIcon from "../../asset/images/social_instagram_icon.svg";
import ShopeeIcon from "../../asset/images/social_shopee_icon.svg";
import YoutubeIcon from "../../asset/images/social_youtube_icon.svg";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <Container style={{ marginBottom: "50px" }}>
        <Grid container>
          <Grid item md={3} xs={6}>
            <Typography variant="h6">
              <b>HỖ TRỢ</b>
            </Typography>
            <List>
              <ListItem className="footer-list-item">
                <Typography variant="body2">Tình trạng đơn hàng</Typography>
              </ListItem>
              <ListItem className="footer-list-item">
                <Typography variant="body2">Hướng dẫn chọn size</Typography>
              </ListItem>
              <ListItem className="footer-list-item">
                <Typography variant="body2">Liên hệ</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography variant="h6">
              <b>CHÍNH SÁCH</b>
            </Typography>
            <List>
              <ListItem className="footer-list-item">
                <Typography variant="body2">Giao hàng và đổi hàng</Typography>
              </ListItem>
              <ListItem className="footer-list-item">
                <Typography variant="body2">Phương thức thanh toán</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography variant="h6">
              <b>THÔNG TIN</b>
            </Typography>
            <List>
              <ListItem className="footer-list-item">
                <Typography variant="body2">
                  CÔNG TY CỔ PHẦN THỂ THAO SÔNG LAM NGHỆ AN
                </Typography>
              </ListItem>
              <ListItem className="footer-list-item">
                <Typography variant="body2">
                  Địa chỉ: Số 6, Đào Tấn, Phường Cửa Nam, Thành Phố Vinh, Tỉnh
                  Nghệ An
                </Typography>
              </ListItem>
              <ListItem className="footer-list-item">
                <Typography variant="body2">
                  MST: 2902103060, do Sở Kế Hoạch Và Đầu Tư Tỉnh Nghệ An, cấp
                  ngày 24/5/2021
                </Typography>
              </ListItem>
              <ListItem className="footer-list-item">
                <img src={BoCongThuong} alt="" />
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography variant="h6">
              <b>THEO DÕI CHÚNG TÔI</b>
            </Typography>
            <ListItem className="footer-list-item social-media">
              <img src={FacebookIcon} alt="" />
              <img src={InstaIcon} alt="" />
              <img src={YoutubeIcon} alt="" />
              <img src={ShopeeIcon} alt="" />
            </ListItem>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container>
        <Grid container>
          <Grid item md={8} xs={12}>
            <List>
              <ListItem className="footer-list-item">
                <Typography variant="body2">Chính sách bảo mật</Typography>
              </ListItem>
              <ListItem className="footer-list-item">
                <Copyright />
                <Typography variant="body2">
                  {" "}
                  Bản quyền thuộc về Công Ty Cổ Phần Thể Thao Sông Lam Nghệ An
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={4} className="payment">
            <img src={Visa} alt="" />
            <img src={MasterCart} alt="" />
            <img src={ZaloPay} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
