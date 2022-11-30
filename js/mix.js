$(function(){
    history.scrollRestoration = "manual"
    $(".sub").css({display:"none"});
    $("#gnb li, .sub").hover(function(){
        $(".sub").stop().slideDown(500);
    },function(){
        $(".sub").stop().slideUp(500);
    });
    $("#lnb > ul > li").hover(function(){
       var i =$(this).index();
        $("#gnb ul li a").removeClass("on");
        $("#gnb ul li").eq(i).find("a").addClass("on");
        $(this).css({background:"#111"});
    }, function(){
        $("#gnb ul li a").removeClass("on");
        $("#lnb ul li").css({background:"none"});
        
    });
    //--------------------------------------------------------------------
    $(function(){
  var current = 0;
    $("#page li").eq(0).addClass("on"); //처음 시작할 때에도 버튼에 서식이 지정된다. 맨마지막에 추가한거당
  function move(i){
      if(current == i) return; //return은 빠져나온다. 조건이 하나면 중괄호 생략가능.
      $("#visual ul li").eq(current).css({left:"0"}).animate({left:"-100%"}); // eq의 0번째 애는 레프트 값은 0이다. 
                                        //커런트값과 i값이 같지 않으면 위의 실행문을 실행해라. 첫번쨰 애가 슬라이드 됨.
      $("#visual ul li").eq(i).css({left:"100%"}).animate({left:"0"}); //두번쨰 슬라이드가 레프트 100%의 상태에서 레프트 0값으로
                                                                      //첫번쨰 자리에 오게 해라.
      current = i;
      //-----여기까지 무브함수 첫번째. 테스트 할 때 move(1); 값을 넣어서 실행해봤음.  그런데 일일이 다 쓸 수가 없으니까 아래처럼~~-----
  } 
   $("#page li").click(function(e){
       e.preventDefault();
       var i = $(this).index(); //i에는 내가 클릭한 아이의 인덱스 번호를 가지게 함.
       $("#page li").removeClass("on");
       $(this).addClass("on"); // 클릭한 애한테만 on클래스를 준다. 
       move(i);//클릭하는 대로 슬라이드되는 함수 (move)를 실행시킬것이다.
       
   });
    //----------------------------클릭 안해도 인터벌되게 할것임-------------------------
    function timer() {
        var n = current + 1;
        if(n == $("#visual ul li").length) {
        n=0; //n이 렝스길이 4와 같으면 n에다가 다시 0을 넣어라.
      }
      $("#page li").eq(n).trigger("click"); //강제로 클릭이벤트를 호출해옴.
    }
    var interval = setInterval(timer, 3000);
    //------------후버했을 때 슬라이드 안넘어가게 하기---------------------------------
    $("#visual, #page li, #btn").hover(function(){
        clearInterval(interval);
    },function(){
        interval = setInterval(timer, 3000);
    });
    //-------------------------넥스트를 클릭했을 때에 페이지 넘어가게 하기. 그런데 넥스트는 타이머 함수랑 같으니까------------
    $(".next").click(function(){
       timer(); 
    });
    //------------------------이전버튼 눌렀을 때 넘어가게 하기----------------------------------------------
    $(".prev").click(function(){
       var n = current -1; //타이머의 n과는 다름. 지역변수니까! 그런데 커런트 변수는 전역변수라서 다 쓰임! 
        if(n == $("#visual ul li").length) {
            n=0;
        }
        $("#page li").eq(n).trigger("click");
    });
    
});
    //-----------------------------뉴프로덕트 슬라이드--------------------------------------
    //-----------------------------뉴프로덕트 슬라이드--------------------------------------
    //-----------------------------뉴프로덕트 슬라이드--------------------------------------
    var current1 = 0;
    $("#new_page li").eq(0).addClass("new_on"); //처음 시작할 때에도 버튼에 서식이 지정된다. 맨마지막에 추가한거당
  function move1(i){
      if(current1 == i) return; //return은 빠져나온다. 조건이 하나면 중괄호 생략가능.
      $("#new_visual ul li").eq(current1).css({left:"0"}).animate({left:"-100%"}); // eq의 0번째 애는 레프트 값은 0이다. 
                                        //커런트값과 i값이 같지 않으면 위의 실행문을 실행해라. 첫번쨰 애가 슬라이드 됨.
      $("#new_visual ul li").eq(i).css({left:"100%"}).animate({left:"0"}); //두번쨰 슬라이드가 레프트 100%의 상태에서 레프트 0값으로
                                                                      //첫번쨰 자리에 오게 해라.
      current1 = i;
      //-----여기까지 무브함수 첫번째. 테스트 할 때 move(1); 값을 넣어서 실행해봤음.  그런데 일일이 다 쓸 수가 없으니까 아래처럼~~-----
  } 
   $("#new_page li").click(function(e){
       e.preventDefault();
       var i = $(this).index(); //i에는 내가 클릭한 아이의 인덱스 번호를 가지게 함.
       $("#new_page li").removeClass("new_on");
       $(this).addClass("new_on"); // 클릭한 애한테만 on클래스를 준다. 
       move1(i);//클릭하는 대로 슬라이드되는 함수 (move)를 실행시킬것이다.
       
   });
    //----------------------------클릭 안해도 인터벌되게 할것임-------------------------
    function timer1() {
        var n = current1 + 1;
        if(n == $("#new_visual ul li").length) {
        n=0; //n이 렝스길이 4와 같으면 n에다가 다시 0을 넣어라.
      }
      $("#new_page li").eq(n).trigger("click"); //강제로 클릭이벤트를 호출해옴.
    }
    var interval1 = setInterval(timer1, 3000);
    //------------후버했을 때 슬라이드 안넘어가게 하기---------------------------------
    $("#new_visual, #new_page li, #new_btn").hover(function(){
        clearInterval(interval1);
    },function(){
        interval1 = setInterval(timer1, 3000);
    });
    //-------------------------넥스트를 클릭했을 때에 페이지 넘어가게 하기. 그런데 넥스트는 타이머 함수랑 같으니까------------
    $(".new_next").click(function(){
       timer1(); 
    });
    //------------------------이전버튼 눌렀을 때 넘어가게 하기----------------------------------------------
    $(".new_prev").click(function(){
       var n = current1 -1; //타이머의 n과는 다름. 지역변수니까! 그런데 커런트 변수는 전역변수라서 다 쓰임! 
        if(n == $("#new_visual ul li").length) {
            n=0;
        }
        $("#new_page li").eq(n).trigger("click");
    });
    
    //---------------------------------------------블랙라벨 글자 애니메이션--------------------------------------------------------
    //---------------------------------------------블랙라벨 글자 애니메이션--------------------------------------------------------
    var ht = $(window).height(); //현재 창의 높이값을 ht 변수에 넣는다.
    $(window).scroll(function(){
        var ht = $(window).height();
        var t = $(window).scrollTop();
        console.log(t);
        if(t>3911 && t<=4911){
             $(".con").animate({"top":"330px","opacity":"1"});
                }
        if(t>4491 && t<=5695){
             $(".con2").animate({"top":"0px","opacity":"1"});
                }
        if(t>5211 && t<=6961){
             $(".con4").animate({"left":"-110px","opacity":"1"});
                }
        if(t>5211 && t<=6961){
             $(".con5").animate({"right":"-64px","opacity":"1"});
                }
        if(t>5211 && t<=6961){
             $(".con6").animate({"top":"-129","opacity":"1"});
                }
        if(t>6238 && t<=7438){
             $(".con3").animate({"top":"0px","opacity":"1"});
                }
        if(t>6748 && t<=7948){
             $(".con7").animate({"top":"0px","opacity":"1"});
                }
    });
    
    
    
    
    //---------------------------------------------악세사리 슬라이드--------------------------------------------------------
    //---------------------------------------------악세사리 슬라이드--------------------------------------------------------
    //---------------------------------------------악세사리 슬라이드--------------------------------------------------------
       var current2 = 0;
    $("#accessory_page li").eq(0).addClass("on2"); //처음 시작할 때에도 버튼에 서식이 지정된다. 맨마지막에 추가한거당
  function move2(i){
      if(current2 == i) return; //return은 빠져나온다. 조건이 하나면 중괄호 생략가능.
      $("#accessory_visual ul li").eq(current2).css({left:"0"}).animate({left:"-100%"}); // eq의 0번째 애는 레프트 값은 0이다. 
                                        //커런트값과 i값이 같지 않으면 위의 실행문을 실행해라. 첫번쨰 애가 슬라이드 됨.
      $("#accessory_visual ul li").eq(i).css({left:"100%"}).animate({left:"0"}); //두번쨰 슬라이드가 레프트 100%의 상태에서 레프트 0값으로
                                                                      //첫번쨰 자리에 오게 해라.
      current2 = i;
      //-----여기까지 무브함수 첫번째. 테스트 할 때 move(1); 값을 넣어서 실행해봤음.  그런데 일일이 다 쓸 수가 없으니까 아래처럼~~-----
  } 
   $("#accessory_page li").click(function(e){
       e.preventDefault();
       var i = $(this).index(); //i에는 내가 클릭한 아이의 인덱스 번호를 가지게 함.
       $("#accessory_page li").removeClass("on2");
       $(this).addClass("on2"); // 클릭한 애한테만 on클래스를 준다. 
       move2(i);//클릭하는 대로 슬라이드되는 함수 (move)를 실행시킬것이다.
       
   });
    //----------------------------클릭 안해도 인터벌되게 할것임-------------------------
    function timer2() {
        var n = current2 + 1;
        if(n == $("#accessory_visual ul li").length) {
        n=0; //n이 렝스길이 4와 같으면 n에다가 다시 0을 넣어라.
      }
      $("#accessory_page li").eq(n).trigger("click"); //강제로 클릭이벤트를 호출해옴.
    }
    var interval2 = setInterval(timer2, 3000);
    //------------후버했을 때 슬라이드 안넘어가게 하기---------------------------------
    $("#accessory_visual, #accessory_page li, #accessory_btn").hover(function(){
        clearInterval(interval2);
    },function(){
        interval2 = setInterval(timer2, 3000);
    });
    //-------------------------넥스트를 클릭했을 때에 페이지 넘어가게 하기. 그런데 넥스트는 타이머 함수랑 같으니까------------
    $(".accessory_next").click(function(){
       timer2(); 
    });
    //------------------------이전버튼 눌렀을 때 넘어가게 하기----------------------------------------------
    $(".accessory_prev").click(function(){
       var n = current2 -1; //타이머의 n과는 다름. 지역변수니까! 그런데 커런트 변수는 전역변수라서 다 쓰임! 
        if(n == $("#visual ul li").length) {
            n=0;
        }
        $("#accessory_page li").eq(n).trigger("click");
    });
    
    
});