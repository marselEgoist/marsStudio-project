const money = [
    {
        img: "https://celes.club/uploads/posts/2022-11/1667307249_1-celes-club-p-fon-s-dengami-vkontakte-1.jpg",
        title: "bomer ml",
        bio: "When I look to the future, my plan is to give all my wealth to the foundation and leave just enough for myself and my family."
    },
    {
        img: "https://img.freepik.com/premium-photo/ai-generated-illustration-united-state-currency-dollars-pile-from-packs-of-money_441362-4354.jpg",
        title: "jon uic",
        bio: "When I look to the future, my plan is to give all my wealth to the foundation and leave just enough for myself and my family."   
    },
    {
        img: "https://s.zagranitsa.com/images/articles/8813/870x486/cfe0e1a6339e9bc19b8223d0d2816205.jpg?1584013276",
        title: "doner sy",
        bio: "When I look to the future, my plan is to give all my wealth to the foundation and leave just enough for myself and my family."   
    },
    {
        img: "https://psy.su/mod_files/gazeta/img_img_gazeta_10511.jpg",
        title: "shava lo",
        bio: "When I look to the future, my plan is to give all my wealth to the foundation and leave just enough for myself and my family."   
    },
    {
        img: "https://kartinkof.club/uploads/posts/2022-05/1653709609_3-kartinkof-club-p-veselaya-kartinka-deneg-net-4.png",
        title: "tamiral los",
        bio: "When I look to the future, my plan is to give all my wealth to the foundation and leave just enough for myself and my family."   
    },
    {
        img: "https://sputnik.kg/img/101628/42/1016284226_0:105:2000:1230_1920x0_80_0_0_a173d692285629bd3207e18467bbd71e.jpg",
        title: "alisa dom",
        bio: "When I look to the future, my plan is to give all my wealth to the foundation and leave just enough for myself and my family."   
    },
] ;

const MainMoney = document.querySelector(".main_money")

function GetMoney() {
    let domic = money.map((item) => {
        return`
        <div class="money">
                    <div class="money_img">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="title">
                        <h1>${item.title}</h1>
                        <p>${item.bio}</p>
                    </div>
                    </div>
        `
    })
    MainMoney.innerHTML = domic.join("")
}

GetMoney()