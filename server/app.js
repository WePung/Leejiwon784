const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json()) // json parsing을 위해서
app.use(express.urlencoded({extended:true})) // parsing을 위해서

// 회원정보
let id = 1;
const userInfo = [{
    id : 1,
    userName:"admin",
    userId:"admin",
    password:"admin1234",
    email:"admin@test.com",
    gender:"male"
}];

app.get('/api/userInfo', (req, res)=>{
    res.json(userInfo);
});

app.post('/api/userInfo', (req, res)=>{
    const {userId,userName, password, email, gender} = req.body;
    console.log("req.body = "+ req.body);
    userInfo.push({
        id : id++,
        userId,
        userName,
        password,
        email,
        gender
    });
    return res.send('success');
});

// 학교 정보
let schoolUniqueId
const schoolInfo = [{
        schoolUniqueId: 1,
        schoolName : "서울영상고등학교",
            schoolDepartment :{
                oneDepartment: "Video Content",
                twoDepartment:"Video Design",
                threeDepartment:"Accounting"
            },
        youtubeLink:"https://www.youtube.com/embed/LhQjt5gZ5tY"
        },
        {
        schoolUniqueId: 2,
        schoolName : "경기자동차과학고등학교",
            schoolDepartment :{
                oneDepartment: "Department of Future Automotive",
                twoDepartment:"Department of Automotive",
                threeDepartment:"Department of Automotive Design",
                fourDepartment:"Department of Automotive IT"
            },
        youtubeLink:"https://www.youtube.com/embed/uRnDNKIxbeI"
        }
    ];

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

// 학교 리뷰
// const schooleReview = [{
//     schoolUniqueId: 1,
//     schoolName : "서울영상고등학고",
//     schoolDepartment :{
//         score: "content",
//         twoDepartment:"design",
//         threeDepartment:"accounting"
//     }
// }];

// app.get('/api/schoolReview', (req, res)=>{
//     res.json(schooleReview);
// });

// app.post('/api/schoolReview', (req, res)=>{
//     const {schoolUniqueId, schoolName, schoolDepartment} = req.body;
//     console.log("req.body = "+ req.body);
//     todoList.push({
//         schoolUniqueId,
//         schoolName,
//         schoolDepartment
//     });
//     return res.send('success');
// });


app.listen(4000, ()=>{
    console.log("server start")
});