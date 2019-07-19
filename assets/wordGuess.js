
//$( "#" ).animate({
    //     opacity: 0.25,
    //     left: "+=50",
    //     height: "toggle"
    //   }, 5000)


var globalTimer = 10;

function reset(){}

function gameover(){
    
    
    $('#africa').empty()
    $('#africa').append('<h2>GAMEOVER</h2>')
}

$('#start').click(function(){console.log('yeah')


$('#face').animate({
top:'0px',
opacity:'0'
},3000,function(){ 
    $('#face').remove()
    console.log('animation complete')})

    $('#america').animate({
        top:'0px',
        opacity:'0'
        },3000,function(){ 
            $('#america').remove()
            console.log('animation complete')})

$('#start').animate({
    top:'0px',
    opacity:'0'
    },2000,function(){ 
     
        $('#start').remove()
        console.log('put game stuff after this')
        $('#africa').append('<h1 id="prompt">are you ready to die</h1>')
        $('#africa').append('<h2 id="timer"></h1>')
function timer (){
    
    
    var downloadTimer = setInterval(function(){
      document.getElementById("timer").innerHTML = globalTimer + " seconds remaining";
      globalTimer -= 1;
      if(globalTimer <= -1){
        clearInterval(downloadTimer);
      gameover()
      }
    }, 1000);}
        
timer()
       




    
     $('#africa').append('<div id="questions"></div>')
     $("#questions").append('<ol class="question">Yes</ol>')
     $("#questions").append('<ol class="question">No</ol>')
     $("#questions").append('<ol class="question">lol</ol>')
     $("#questions").append('<ol class="question">fuck you website</ol>')

     $('.question').mouseup(function(){
        if(this.innerText=='fuck you website'){
            $('#questions').empty()
            question2()

         }

         if(this.innerText=='lol'){
            $('#questions').empty()
            $('#prompt').text('you think this is fucking funny?')
            $("#questions").append('<ol class="question">Yes</ol>')
            $("#questions").append('<ol class="question">No</ol>')
            globalTimer=10
            $('.question').mouseup(function(){if(this.innerText=='Yes'){
                question2()
            }})
            $('.question').mouseup(function(){if(this.innerText=='No'){
                gameover()
                $('#prompt').text('haha')
               }})
           }

        if(this.innerText=='Yes'||'No'){this.innerText='fuck you  website '}
         
        


         function question2 (){//second q
            globalTimer=10
            $('#questions').empty()
            $('#prompt').text('do you believe in the afterlife')
            $("#questions").append('<ol class="question">72 you know what</ol>')
            $("#questions").append('<ol class="question">im gonna be an immortal in the hollow earth shambala</ol>')
            $("#questions").append('<ol class="question">im ready to see the BIOS of conscioussness</ol>')
            $("#questions").append('<ol class="question">no</ol>')

            $('.question').mouseup(function(){
                
                if(this.innerText=='72 you know what'){
                
                gameover()
                
                $('#africa').text('praise allah')
                $('#africa').append('<img src="assets/boom2.png"></img>')


            }
            if(this.innerText=='im gonna be an immortal in the hollow earth shambala'){
                globalTimer=5
                $('#questions').empty()
                $('#prompt').text('Are you pure of heart')
                $("#questions").append('<ol class="question">yes</ol>')
                $("#questions").append('<ol class="question">no</ol>')
                $('.question').mouseup(function(){
                if(this.innerText=='no'){gameover(),$('#asia').text('lol dumbass mortal get of here')}
                if(this.innerText=='yes'){gameover(),$('#africa').text('nice bro lets chill'),$('#asia').append('<img id="face" src = "assets/spiritFace.png" ></img>')}
                })
            
            }
            if(this.innerText=='im ready to see the BIOS of conscioussness'){
                $('#questions').empty()
                $('#prompt').text('nice me too')
                $("#questions").append('<ol class="question">skeet skeet</ol>')
                $('.question').mouseup(function(){question3()})
            }
            if(this.innerText=='no'){question3()}




        })




                }
          function question3 (){//third q
                    globalTimer=10
                    $('#questions').empty()
                    $('#prompt').text('did you play my rpg game')
                    $("#questions").append('<ol class="question">No</ol>')
                    $("#questions").append('<ol class="question">I cant even fulfill my own role</ol>')
                    $("#questions").append('<ol id="memea" class="question">What rpg game</ol>')
                    $("#questions").append('<ol class="question">Whats the right answer</ol>')
                    $('.question').mouseup(function(){
                        if(this.innerText=='can i go to the last question'){question4()}

                        if(this.innerText=='Whats the right answer'){
                            gameover()
                            $('#africa').text('not that one')
                
                         }
                         if(this.innerText=='What rpg game'){
                             
                            $('#prompt').text('lol good one my dude')
                            $('#memea').text('can i go to the last question')
                         }
                         
                         if(this.innerText=='No'){
                             gameover()
                             $('#asia').text('https://briiguy.github.io/unit-4-game/')
                             $('#asia').append('<img id="face" src = "assets/donaldbreath.png" ></img>')
                         }
                         if(this.innerText=='I cant even fulfill my own role'){gameover(),$('#asia').text('stop playing my game and do your job')}
                    })
                    




                        }
          function question4 (){//fourth q
                            globalTimer=10
                            $('#questions').empty()
                            $('#prompt').text('do you wish my quiz was longer')
                            $("#questions").append('<ol class="question">my children will never get these seconds back from their father again</ol>')
                            $("#questions").append('<ol class="question">yea if only i had a more full-bodied quirky experience</ol>')
                            $("#questions").append('<ol class="question">no one is going to hire a memer</ol>')
                            $("#questions").append('<ol class="question">show me something completely different</ol>')
                            $('.question').mouseup(function(){
                                if(this.innerText=='show me something completely different'){window.location.replace("http://oskarstalberg.com/game/planet/planet.html");}
                                if(this.innerText=='my children will never get these seconds back from their father again'){window.location.replace("https://www.youtube.com/watch?v=oHg5SJYRHA0");}
                                if(this.innerText=='no one is going to hire a memer'){gameover(),$('#asia').append('<img id="face" src = "assets/dab.png" ></img><img id="face" src = "assets/asianlol.png" ></img>'),$('#asia').append('<h1>get memed</h1>')}
                                if(this.innerText=='yea if only i had a more full-bodied quirky experience'){

                                    $('#questions').empty()
                                    $('#prompt').text('maybe then will you be able to die in peace')
                                    $('#timer').remove()
                                    $('#asia').append('<img id="face" src = "assets/dab.png" >end</img>')


                                }











                            })



                                }


         
        
    
    
    
    
    })//mouseup after first q
    
    
    
    
    })
    
})








