function Macro(Name,Icon,Key,Arity,Function){
//Normal Macro using javascript typing
return [Name,Icon,Key,Arity,Function];
}
var Post_Macro=Macro("FormPost","Form Post.jpg","P",1,function (url){return `<form action='${url}' method='post'>

 </form>`});
var Get_Macro=Macro("FormGet","Form Get.jpg","G",1,function (url){return `<form action='${url}' method='get'>

 </form>`});


var LoginForm_Macro=Macro("Login Form (HTML)","Login Form.jpg","L",0,function (){return `<div id=loginbox>
<h2>Login</h2>
<div class=row>
<form action="./login.php" method="post">
<div class=rowleft>Username:</div>
<div class=rowright><input name=username></div>
</div>
<div class=row>
<div class=rowleft>Password:</div>
<div class=rowright><input type=password name=password></div>
</div>
<div class=row>
<div class="rowleft"></div>
<button class="btn" role="button">login</button></div>
</form>
<br><p align=right><a href="./register.php">New Here? Create a new account.</a></p>
</div>`});

var LoginForm_CSS=Macro("Login Form (CSS)","Login Form2.jpg","C",0,function (){return `<style>
html{scroll:none}

#loginbox{position:absolute;
top:18vh;
left:30vw;
width:42vw;height:52vh;
z-index:1;}

div.row{width:100%;min-height:32px;}
div.rowleft{width:44%;height:100%;display:inline-block;}
div.rowright{width:55%;height:100%;display:inline-block;}
</style>
`});

var RegistrationForm_HTML_Macro = Macro("Registration Form (HTML)", "Registration Form.jpg", "R", 0, function () {
    return `<div id="registrationbox">
        <h2>Register</h2>
        <div class="row">
            <form action="./register.php" method="post">
                <div class="rowleft">Username:</div>
                <div class="rowright"><input name="username"></div>
            </div>
            <div class="row">
                <div class="rowleft">Email:</div>
                <div class="rowright"><input type="email" name="email"></div>
            </div>
            <div class="row">
                <div class="rowleft">Password:</div>
                <div class="rowright"><input type="password" name="password"></div>
            </div>
            <div class="row">
                <div class="rowleft"></div>
                <button class="btn" role="button">Register</button>
            </div>
            </form>
            <br>
            <p align="right"><a href="./login.php">Already have an account? Login here.</a></p>
        </div>`;
});

var RegistrationForm_CSS_Macro = Macro("Registration Form (CSS)", "Registration Form2.jpg", "G", 0, function () {
    return `<style>
        html { scroll: none; }
        #registrationbox {
            position: absolute;
            top: 18vh;
            left: 30vw;
            width: 42vw;
            height: 52vh;
            z-index: 1;
        }
        div.row {
            width: 100%;
            min-height: 32px;
        }
        div.rowleft {
            width: 44%;
            height: 100%;
            display: inline-block;
        }
        div.rowright {
            width: 55%;
            height: 100%;
            display: inline-block;
        }
    </style>`;
});


let form_macros=["Forms","Forms.jpg",[LoginForm_Macro,LoginForm_CSS,RegistrationForm_HTML_Macro,RegistrationForm_CSS_Macro,Post_Macro,Get_Macro]];