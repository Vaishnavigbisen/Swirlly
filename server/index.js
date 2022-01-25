require('dotenv').config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';

//Database Connection
import ConnectDB from './database/connection';

// google authentication config
import googleAuthConfig from './config/google.config';

// private route authentication config
import privateRouteConfig from './config/route.config';

//API
import Auth from './API/Auth';
import Restaurant from './API/Restaurant';
import Food from './API/Food';
import Menu from './API/Menu';
import Image from './API/Image';
import Order from './API/Orders';
import Review from './API/Reviews';
import User from './API/User';

// passport config
googleAuthConfig(passport);
privateRouteConfig(passport);

const swirlly = express();
swirlly.use(cors());
swirlly.use(express.json());
swirlly.use(helmet());
swirlly.use(passport.initialize());
//swirlly.use(passport.session());

//Application Routes
swirlly.use('/auth', Auth);
swirlly.use('/restaurant', Restaurant);
swirlly.use('/food', Food);
swirlly.use('/menu', Menu);
swirlly.use('/image', Image);
swirlly.use('/order', Order);
swirlly.use('/review', Review);
swirlly.use('/user', User);

swirlly.listen(4000, () => {
  ConnectDB()
    .then(() => {
      console.log('Server is running !!!');
    })
    .catch((error) => {
      console.log('Server is running, but database connection failed...');
      console.log(error);
    });
});
