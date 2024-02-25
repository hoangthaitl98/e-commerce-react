import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import classes from "./Footer.module.css";
import { Copyright } from "@mui/icons-material";

function Footer() {
  return (
    <div className={classes.footer}>
      <Container>
        <Grid container>
          <Grid item md={3} xs={6}>
            <Typography variant="h6">
              <b>HỖ TRỢ</b>
            </Typography>
            <List>
              <ListItem className={classes.footerListItem}>
                <Typography variant="body2">Tình trạng đơn hàng</Typography>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Typography variant="body2">Hướng dẫn chọn size</Typography>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Typography variant="body2">Liên hệ</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography variant="h6">
              <b>CHÍNH SÁCH</b>
            </Typography>
            <List>
              <ListItem className={classes.footerListItem}>
                <Typography variant="body2">Giao hàng và đổi hàng</Typography>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Typography variant="body2">Phương thức thanh toán</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography variant="h6">
              <b>THÔNG TIN</b>
            </Typography>
            <List>
              <ListItem className={classes.footerListItem}>
                <Typography variant="body2">
                  CÔNG TY CỔ PHẦN THỂ THAO SÔNG LAM NGHỆ AN
                </Typography>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Typography variant="body2">
                  Địa chỉ: Số 6, Đào Tấn, Phường Cửa Nam, Thành Phố Vinh, Tỉnh
                  Nghệ An
                </Typography>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Typography variant="body2">
                  MST: 2902103060, do Sở Kế Hoạch Và Đầu Tư Tỉnh Nghệ An, cấp
                  ngày 24/5/2021
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={6}></Grid>
        </Grid>
      </Container>
      <Divider />
      <Container>
        <Grid container>
          <Grid item md={8} xs={12}>
            <List>
              <ListItem className={classes.footerListItem}>
                <Typography variant="body2">Chính sách bảo mật</Typography>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Copyright />
                <Typography variant="body2">
                  {" "}
                  Bản quyền thuộc về Công Ty Cổ Phần Thể Thao Sông Lam Nghệ An
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
