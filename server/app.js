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
    todoList.push({
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
let schooleId
const schooleInfo = [{
    schooleUniqueId: 1,
    schooleName : "서울영상고등학고",
    schooleDepartment :{
        oneDepartment: "content",
        twoDepartment:"design",
        threeDepartment:"accounting"
    }
}];

app.get('/api/schooleInfo', (req, res)=>{
    res.json(schooleInfo);
});

app.post('/api/schooleInfo', (req, res)=>{
    const {schooleUniqueId, schooleName, schooleDepartment} = req.body;
    console.log("req.body = "+ req.body);
    todoList.push({
        schooleUniqueId,
        schooleName,
        schooleDepartment
    });
    return res.send('success');
});

// 학교 리뷰
const schooleReview = [{
    schooleUniqueId: 1,
    schooleName : "서울영상고등학고",
    schooleDepartment :{
        score: "content",
        twoDepartment:"design",
        threeDepartment:"accounting"
    }
}];

app.get('/api/schooleInfo', (req, res)=>{
    res.json(schooleInfo);
});

app.post('/api/schooleInfo', (req, res)=>{
    const {schooleUniqueId, schooleName, schooleDepartment} = req.body;
    console.log("req.body = "+ req.body);
    todoList.push({
        schooleUniqueId,
        schooleName,
        schooleDepartment
    });
    return res.send('success');
});


app.listen(4000, ()=>{
    console.log("server start")
});