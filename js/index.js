window.addEventListener("load",function(){
    var vm=new Vue({
        el:"#app",
        data:{
            
            adve_list:[
                {img:"upload/adve.jpg.webp"},
                {img:"upload/adve.jpg.webp"}
            ],
            adve_style:{
                display:'block'
            },
            hotwds_list:[
                {txt:"品质生活节",red_style:true},
                {txt:"万卷齐发",red_style:false},
                {txt:"品质箱包",red_style:false},
                {txt:"品质用车",red_style:false},
                {txt:"低价手机",red_style:false},
                {txt:"低至五折",red_style:false},
                {txt:"种子",red_style:false},
                {txt:"美妆护肤",red_style:false},
                {txt:"手机五折",red_style:false},
            ]


        },
        methods:{
            close_adve:function(){
                this.adve_style.display="none"
            }
        }
    })


})


    


