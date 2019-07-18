







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

        $('#africa').append('<h1>are you ready to die</h1>')
        
       
        $('#start').remove()
        console.log('put game stuff after this')
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    })

})








