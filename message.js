//数据初始化
var APP_ID = '4a1qMlNcbsT2SSDaJKxMJKka-gzGzoHsz';
var APP_KEY = 'DHog2uYMIiaWhyICL6yAUVoa';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


//显示数据
var query = new AV.Query('TestObject');
  query.find()
  .then(
    function (testObjects) {
    let array=testObjects.map((item)=>item.attributes)
      array.forEach((item) => {
      let li=document.createElement('li');
      li.innerHTML=`${item.name}: ${item.content}`;
      let messagelist=document.querySelector('#messageList');
      messagelist.append(li);
        
      
     
  })    
  }, function (error) {
    // 异常处理
  });

//添加数据
var messageform=document.querySelector("#form");
messageform.addEventListener('submit',function(e){
  e.preventDefault();
  
let content=messageform.querySelector("#textform").value;
  let name=messageform.querySelector("#name").value;
  if(content&&name!==""){
    var TestObject = AV.Object.extend('TestObject');
  var testObject = new TestObject();
  testObject.save({
    'name':name,
    'content':content
  }).then(function(object) {
    let li=document.createElement('li');
      li.innerHTML=`${object.attributes.name}: ${object.attributes.content}`;
      let messagelist=document.querySelector('#messageList');
      messagelist.append(li);
      messageform.querySelector("#textform").value="";
  })
  }else if(name===""){
    alert("请输入你的用户名，骚年");
  }else{
    alert("快给我输入你的评论");
  }
  
})




// !function(){
//   var model={
//     //初始化数据
//     init:function(){
//       var APP_ID = '4a1qMlNcbsT2SSDaJKxMJKka-gzGzoHsz';
//       var APP_KEY = 'DHog2uYMIiaWhyICL6yAUVoa';
//       AV.init({appId: APP_ID,appKey: APP_KEY});
//     },
//     //查找数据
//     fetch:function(){
//       var query=new AV.Query('TestObject');
//       return query.find()
//     },
//      //保存数据
//     save:function(name,content){
//       var TestObject = AV.Object.extend('TestObject');
//       var testObject = new TestObject();
//       return testObject.save({
//       'name':name,
//       'content':content
//   })
//     }

//   }

//   var view=document.querySelector("#message");
  

//    //逻辑处理
//   var controller={
//     view:null,
//     model:null,
//     messageList:null,
//     init:function(view,model){
//       this.view=view;
//       this.model=model;
//       this.messageList=view.querySelector("#messageList");
      
//       this.form=view.querySelector("form");
//       this.model.init();
//       this.loadMessages();
//       this.bindEvents();
      
//     },
//     loadMessages:function(){
//       this.model.fetch().then(
//         (messages)=>{
//           let array=testObjects.map((item)=>item.attributes);
//           array.forEach((item) => {
//           let li=document.createElement('li');
//           li.innerHTML=`${item.name}: ${item.content}`;
//           let messagelist=document.querySelector('#messageList');
//           messagelist.append(li);
//         } )
//    }
//    )
// },
// bindEvents: function(){
//   this.form.addEventListener('submit', function(e){
//     e.preventDefault()
//     this.saveMessage()
//   })
// }
// ,

// saveMessage:function(){
//   let myForm=this.form;
//   let content=document.querySelector("#textform").value;
//   let name=document.querySelector("#name").value;
//   this.model.save(name,content).then(function(object){
//     let li=document.createElement('li');
//     li.innerHTML=`${object.attributes.name}: ${object.attributes.content}`;
//     let messagelist=document.querySelector('#messageList');
//     messagelist.append(li);
//     messageform.querySelector("#textform").value="";
//     console.log(1);
//   })
//  }
//   }

// controller.init(view,model);

// }.call()
// console.log(bindEvents);


