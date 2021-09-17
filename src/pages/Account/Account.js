import React, { useState } from 'react'
import './Account.css'
import Loader from '../../components/Loader/Loader'
import axios from 'axios'

export default function Account() {

    document.title = `Account`;


    const [loginFormTransform, setLoginFormTransform] = useState('translateX(-300px)');
    const [regFormTransform, setRegFormTransform] = useState('');
    const [indicatorTransform, setIndicatorTransform] = useState('translateX(100px)');

    const [isLoading, setIsLoading] = useState(false);

    const [color, setColor] = useState('red');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pwd, setPwd] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [accountType, setAccountType] = useState('patient');
    const [checked, setChecked] = useState(false);
    const [title, setTitle] = useState('');


    function registerTab() {
        setRegFormTransform('translateX(0px)');
        setLoginFormTransform('translateX(-300px)');
        setIndicatorTransform('translateX(100px)');
    }

    function loginTab() {
        setRegFormTransform('translateX(300px)');
        setLoginFormTransform('translateX(0px)');
        setIndicatorTransform('translateX(0px)');
    }

    const [signupErr, setSignupErr] = useState(null);
    const [loginErr, setLoginErr] = useState(null);

    function IsEmail(email) {
        if(email.includes("@")) {
            var array = email.split("@")
            var sub = array[1]
            if(sub.includes(".")) {
                return true // email
            } else {
                return false // not an email
            }
        } else {
            return false // not an email
        }
    }

    function signup(e) {
        e.preventDefault();
        setSignupErr(null);
        if(name.trim() === '' || email.trim() === '' || password1.trim() === ''|| password2.trim() === '' || accountType.trim() === '' || title.trim() === '') {
            setSignupErr("All fields are required!"); 
        } else {
            if(IsEmail(email)===false) {
                setSignupErr("You entered an invalid email!"); 
            } else {
                if(checked===false) {
                    setSignupErr("Please agree to our terms"); 
                } else {
                    if(password1!==password2) {
                        setSignupErr("Both passwords must be the same"); 
    
                    } else {

                    setIsLoading(true);
                    axios.post('https://api.e-care.life/api/user/create', {
                        name,
                        email,
                        phone,
                        password:password1,
                        checked,
                        password_confirmation:password2,
                        account_type:accountType,
                        title
                    }).then(({data})=>{
                        setIsLoading(false);
                        if(typeof(data)=="string") {
                            setColor('green');
                            setSignupErr(data);
                        } else {
                            setColor('red');
                            setSignupErr(JSON.stringify(data));
                        }

                    }).catch(err=>{
                        setIsLoading(false);
                        setColor('red');
                        setSignupErr('An error occured. Please try again');

                    })
                }
            }
        }
       
        }
    }

    function login(e) {
        e.preventDefault();
        setLoginErr(null);
        if(email.trim() === '' || pwd.trim() === '') {
            setLoginErr("All fields are required!");
        } else {
            // login
            setIsLoading(true);
            axios.post('https://api.e-care.life/api/login', {
                email,
                password:pwd,
               
            }).then(({data})=>{
                setIsLoading(false);
                if(typeof(data)=="string") {
                    setColor('green');
                    setLoginErr("User has logged in");
                    localStorage.setItem('token', data);
                    window.location="/user"
                } else {
                    setColor('red');
                    setLoginErr(JSON.stringify(data));
                }

            }).catch(err=>{
                setIsLoading(false);
                setColor('red');
                setLoginErr('An error occured. Please try again');

            })

        }
    }

    return (
        <React.Fragment>
        {/* {verifyAuth()} */}
        {isLoading && (<Loader />)}
        {/* <Header title = {title} clientRootUrl = {clientRootUrl} loggedInStatus = {loggedInStatus} cartNum = {cartNum} token = {token} /> */}
        <div className = "account-page" style = {{marginTop:'-30px',marginBottom:'-20px'}}>
            <div className = "container">
                <div className = "row">
                    <div className = "col-2">
                        <img src = "http://localhost:3000/images/cover.png" className = "img-style" alt = "" />
                    </div>

                    <div className = "col-2"  style = {{marginTop:'-120px'}}>
                        <div className = "form-container">
                            <div className = "form-btn">
                                <span onClick = {loginTab}>Login</span>
                                <span onClick = {registerTab}>Register</span>
                                <hr id = "Indicator" style = {{transform:indicatorTransform}} />
                            </div>



                            <form id = "LoginForm" style = {{transform:loginFormTransform,marginTop:'-40px'}}>
                                <p style = {{color,fontSize:'13.5px',float:'left'}}>{loginErr}</p>
                                <input type = "text" className = "rr" name = "email" placeholder = "Email" onChange = {(e)=>setEmail(e.target.value)} value = {email} />
                                <input type = "password" className = "rr" name = "password" placeholder = "Password" onChange = {(e)=>setPwd(e.target.value)} value = {pwd} />
                                <button type = "submit" className = "btn" onClick = {login}>Login</button>
                                {/* <a style = {{textDecoration:'underline'}} href = "/forgot_password">Forgot password?</a> */}
                            </form>


                            <form id = "RegForm" style = {{transform:regFormTransform,marginTop:'-65px'}}>
                                <p style = {{color,fontSize:'13.5px',float:'left'}}>{signupErr}</p>
                                <input type = "text"  className = "rr" placeholder = "Title e.g. Mr." onChange = {(e)=>setTitle(e.target.value)} value = {title} />
                                <input type = "text" className = "rr" placeholder = "Name" onChange = {(e)=>setName(e.target.value)} value = {name} />
                                <input type = "email" className = "rr" placeholder = "Email" onChange = {(e)=>setEmail(e.target.value)} value = {email} />
                                <input type = "text" className = "rr" placeholder = "Phone" onChange = {(e)=>setPhone(e.target.value)} value = {phone} />
                                <input type = "password" className = "rr" placeholder = "Password" onChange = {(e)=>setPassword1(e.target.value)} value = {password1} />
                                <input type = "password" className = "rr" placeholder = "Re-enter password" onChange = {(e)=>setPassword2(e.target.value)} value = {password2} />
                                {/* <input type = "text" placeholder = "Account Type" onChange = {(e)=>setAccountType(e.target.value)} value = {accountType} /> */}
                                <label><input type="checkbox" name="checkbox" checked = {checked} style = {{float:'left'}} onChange = {(e)=>setChecked(!checked)}/><small style = {{float:'left'}}>&nbsp;I agree to the terms and conditions</small></label>

                                <button type = "submit" className = "btn" onClick = {signup}>Register</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}