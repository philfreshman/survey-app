import{_ as m}from"./Navbar.e07e359c.js";import{A as _,S as u}from"./index.4a9ee999.js";import{h as f,o as i,i as l,j as s,k as w,l as t,z as v,F as g}from"./entry.b6c4f8fc.js";const y={class:"form"},b=t("h2",null,"Register",-1),h=t("br",null,null,-1),x={class:"step-nav"},F={name:"RegisterForm"},R=Object.assign(F,{setup(c){const a=async(o,r)=>{try{const e=await _.Register(o);window.location.assign("/surveyapp/login")}catch{u(0),setInterval(()=>{window.location.assign("/surveyapp/register")},2100)}};return(o,r)=>{const e=f("FormKit");return i(),l("div",y,[s(e,{type:"form",actions:!1,id:"myRegisterForm",onSubmit:a},{default:w(({state:{valid:n}})=>[t("section",null,[b,h,s(e,{type:"text",name:"username",label:"Username",help:"Set your username",validation:"required","validation-messages":{required:"Username required"}}),s(e,{type:"password",name:"password",label:"Password",help:"Enter a new password",validation:"required","validation-visibility":"dirty"}),s(e,{type:"password",name:"password_confirm",label:"Confirm password",help:"Confirm your new password",validation:"required|(100)confirm","validation-visibility":"dirty","validation-label":"Password confirmation"}),t("div",x,[s(e,{type:"submit",label:"Register",disabled:!n},null,8,["disabled"])])])]),_:1})])}}}),q={name:"register"};function $(c,a,o,r,e,n){const d=m,p=R;return i(),l(g,null,[s(d),s(p)],64)}const B=v(q,[["render",$]]);export{B as default};
