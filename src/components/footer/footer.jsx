import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./footer.css";

import Img1 from "../../image/tanzim.png";
import Img2 from "../../image/etehadiye.png";
import Img3 from "../../image/namade_elecronic.png";
import Img4 from "../../image/neshane_sabt.png";
import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}style={{padding:"20px"}}>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <div className="footer-social">
            <a href="/twitter" target="_blank" className="footer-social-item footer-btn1">
              <TwitterIcon />
            </a>
            <a href="/instagram" target="_blank" className="footer-social-item footer-btn2">
              <InstagramIcon />
            </a>
            <a href="/telegram" target="_blank" className="footer-social-item footer-btn3">
              <TelegramIcon />
            </a>
            <a href="/facebook" target="_blank" className="footer-social-item footer-btn4">
              <FacebookIcon />
            </a>
            <p style={{marginLeft:"5px"}}>ما را دنبال کنید</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="footer-header">
            <h2>فیلمنت</h2>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className="footer-body">
            <a className="footer-body-item" href="/about">
              درباره ما
            </a>
            <a className="footer-body-item" href="/contact-us">
              ارتباط با ما
            </a>
            <a className="footer-body-item" href="/rules">
              قوانین
            </a>
            <a className="footer-body-item" href="/guide">
              راهنما
            </a>
            <p>
              تمامی خدمات و فعالیت های سامانه <span className="filmnet"> « فیـــــــلم نـت » </span>حسب مورد، به موجب مجوز نشر
              دیجیتال و تصدی رسانه بر خط به شماره 93/572 از وزارت فرهنگ و ارشاد
              اسلامی، تابع قوانین و مقررات جمهوری اسلامی ایران است.
            </p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <a href="/static/apk/filmnet-4-0-4.apk" className="footer-btn">
            <div>
              <div className="footer-btn-text">دانلود نسخه اندروید</div>
              <div>فــیــلــم‌نــت</div>
            </div>
            <AndroidOutlinedIcon />
          </a>
        </Grid>
        <Grid item xs={12}>
          <div className="footer-img">
            <a href="/" className="footer-img-items"><img className="footer-img-item" src={Img1} alt="ساپرا"/></a> 
            <a href="/" className="footer-img-items"><img className="footer-img-item" src={Img2} alt="مجوز کشوری کسب و کار مجازی"/></a> 
            <a href="/" className="footer-img-items"><img className="footer-img-item" src={Img3} alt="نماد اعتماد الکترونیکی"/></a>
            <a href="/" className="footer-img-items"><img className="footer-img-item" src={Img4} alt="نشان ملی رسانه های دیجیتال"/></a> 
          </div>
        </Grid>
        <Grid item xs={12}>
          <p className="footer-text">کلیه‌ی حقوق مادی و معنوی اپلیکیشن «فیلمنت» متعلق به «مؤسسه‌ی فرهنگی و دیجیتال آینه جادوی یکتا» است</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
