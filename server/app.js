
// 모듈
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require('cors')

// 라우팅
const home = require("./routes/home")

app.use(cors({
    origin:"http://localhost:3000",
}))
app.use(express.json()) // json parsing을 위해서
app.use(express.urlencoded({extended:true})) // parsing을 위해서

// 회원정보
let id = 2;
const userInfo = [{
    id : 0,
    userName:"admin",
    userId:"admin",
    password:"admin1234",
    email:"admin@test.com",
    gender:"male",
    age:24
},
{
    id : 1,
    userName:"test",
    userId:"test",
    password:"test1234",
    email:"test@test.com",
    gender:"female",
    age:20
}
];

// 회원정보 GET
app.get('/api/userInfo', (req, res)=>{
    res.json(userInfo);
});

// 회원가입 POST
app.post('/api/userInfo/signUp', (req, res)=>{
    const {userId,userName, password, email, gender, age} = req.body;
    console.log("req.body = "+ req.body);
    if(!userId || !userName || !password || !email || !gender || !age){
        return res.send("fali")
    }else{
    userInfo.push({
        id : id++,
        userId,
        userName,
        password,
        email,
        gender,
        age
    });
    return res.send('success');
}
});

// 로그인 POST
app.post('/api/userInfo/login', (req, res)=>{
    const userId = req.body.userId;
    const password = req.body.password
    function findUserId(userInfo){
        if(userInfo.userId === userId){
            return true;
        }
    }
    const filtedUserId = userInfo.find(findUserId);

        if(filtedUserId.userId === userId){
            if(filtedUserId.password === password){
                console.log(userInfo[filtedUserId.id]);
                return res.json(userInfo[filtedUserId.id])
            }else{
                return res.send("password invail")
            }
        }else{
            return res.send("password invail")
        }
});

// 학교 정보
let schoolUniqueId
const schoolInfo = [{
        schoolUniqueId: 1,
        schoolName : "서울영상고등학교",
            schoolDepartment : [
                "Video Content",
                "Video Design",
                "Accounting"],
        youtubeLink:"https://www.youtube.com/embed/LhQjt5gZ5tY",
        image:"https://placeimg.com/250/166/any"
        },
        {
        schoolUniqueId: 2,
        schoolName : "경기자동차과학고등학교",
            schoolDepartment :[
                "Department of Future Automotive",
                "Department of Automotive",
                "Department of Automotive Design",
                "Department of Automotive IT"],
        youtubeLink:"https://www.youtube.com/embed/uRnDNKIxbeI",
        image:"https://placeimg.com/250/166/any"
        }
    ];

// 학교정보 GET
app.get('/api/schoolInfo', (req, res)=>{
    res.json(schoolInfo);
});


app.post('/api/schoolInfo', (req, res)=>{
    const {schoolUniqueId, schoolName, schoolDepartment} = req.body;
    console.log("req.body = "+ req.body);
    schoolInfo.push({
        schoolUniqueId,
        schoolName,
        schoolDepartment
    });
    return res.send('success');
});

app.listen(4000, ()=>{
    console.log("server start")
});