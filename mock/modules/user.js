//模拟返回10条用户信息
export default [
    {
        url: "/getUsers", //匹配到指定url
        method: "get",        //请求类型
        response: () => {
            return {
                code: 0,
                message: "ok",
                data: {          //需要返回的参数
                    "list|10": [
                        {
                            id: "@natural(100,200)", //100-200之间的随机整数

                            city: "@county(true)",   //随机省市区

                            "moblie|1": [            //数组中的号码随机返回一个
                                "13531544954",
                                "13632250649",
                                "15820292420",
                                "15999905612",
                            ],
                            name: "@cname",          //随机返回名字
                            state: "@integer(0,1)",  //随机返回0/1(用户性别)

                            "company|1": [           //与手机号码同理
                                "广州某有限公司",
                                "深圳某有限公司",
                                "佛山某有限公司",
                                "惠州某有限公司",
                            ],

                            "address|1": [
                                "中山路3号",
                                "教育路10号",
                                "民兴路9号",
                                "北京路23号",
                            ],
                        },
                    ],
                },
            };
        },
    },
    {
        url: "/tree",
        method: "get",
        response: () => {
            return {
                code: 200,
                message: "success",
                data: {
                    name: {
                        list: [
                            {
                                country: {},
                                key: "132"
                            },
                            {
                                country: {},
                                key: "P-8A"
                            }
                        ]
                    }
                }
            }
        }
    }
];
