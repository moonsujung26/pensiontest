$(function(){
    
    let section = $("main .section");
    let timer = null;

    // 브라우저의 사이즈가 변경될 때 실행
    // 브라우저의 사이즈가 .3s 이전에 바뀌게된다면 secTimeout을
    // 초기화 하여 반복실행을 막습니다.
    $(window).resize(function(){
        
        clearTimeout(timer);
        
        timer = setTimeout(function(){
            
            //섹션의 높이가 달라졌기 때문에 새로 받아온다
            section = $("main .section");
            // 받아온 높이에 따라 view를 다시 넣어준다.
            scrollMove(window.pageYOffset);
            
        },300);
        
    });
    
    // 스크롤 시 기능 실행
    $(window).scroll(function(){
        scrollMove($(this).scrollTop());
    })

    // 처음에 섹션을 감지하기 위해 한번 실행
      scrollMove(window.pageYOffset);
        
    // 여러번 사용을 하기위해 함수를 따로 제작
    // 매개변수에 브라우저의 상단 스크롤 위치를 넣어준다.
    function scrollMove(top){
        section.each(function(){
            
            const pos = $(this).offset().top - 400;

            if(top > pos){
               $(this).addClass("view");
            }

        });
    }
    
})