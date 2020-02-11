function fetchRandomDogimage(){
    // method 1 ajax
    // var xhrRequest= new XMLHttpRequest();
    // xhrRequest.onload=function(){
    //     console.log(xhrRequest.response);
    //     var responseJson=JSON.parse(xhrRequest.response);
    //     var image=responseJson.message;
    //     $('#dog-image').attr('src',image);
    // };
    // xhrRequest.open('get','https://dog.ceo/api/breeds/image/random')
    // xhrRequest.send();

    //method 2 
    // $.ajax({
    //     url:"https://dog.ceo/api/breeds/image/random",
    //     method:'GET',
    //     success:function(data){
    //             //console.log(xhrRequest.response);
    //             //var responseJson=JSON.parse(xhrRequest.response);
    //             var image=data.message;
    //             $('#dog-image').attr('src',image);
    //     }
    // })
    
    //method 3
    $.get("https://dog.ceo/api/breeds/image/random",function(data){
        var image=data.message;
                $('#dog-image').attr('src',image);
    })

}


$('#fetch-dog-image-button').click(fetchRandomDogimage);