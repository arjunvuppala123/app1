import React from 'react';
import styled from 'styled-components';

const Explore = styled.div `
    body{
      background: url('https://cdn.guidingtech.com/imager/assets/WordPress-Import/2017/08/183037/Click-to-enlarge-free-music-wallpaper-backgrounds-and-download_7c4a12eb7455b3a1ce1ef1cadcf29289.jpg?1594275686');
      no-repeat center center fixed;
     -webkit-background-size: cover;
     -moz-background-size: cover;
     -o-background-size: cover;
     background-size: cover;
    }
    img {
    float: right;
}
`;


export const Login = (props) => ( 
    <Explore>
<div class="main">
<section class="signup">
    <div class="container">
        <div class="signup-content">
            <form method="POST" id="signup-form" class="signup-form">
                <h2 style="color:white" class="form-title">Create account</h2>
                <div class="form-group">
                    <input type="text" class="form-input" name="name" id="name" placeholder="Your Name"/>
                </div>
                <div class="form-group">
                    <input type="email" class="form-input" name="email" id="email" placeholder="Your Email"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-input" name="password" id="password" placeholder="Password"/>
                    <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                </div>
                <div class="form-group">
                    <input type="password" class="form-input" name="re_password" id="re_password" placeholder="Repeat your password"/>
                </div>
                <div class="form-group">
                    <input type="submit" name="submit" id="submit" class="form-submit" value="Sign up"/>
                </div>
            </form>
            <p style="color:white" class="loginhere">
                Have already an account ? <a href="#" class="loginhere-link">Login here</a>
            </p>
        </div>
    </div>
</section>
</div>
</Explore>
)