function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FQE2ZvKHN/model.json',modelready);
}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    Random_number_R=Math.floor(Math.random()*255)+1;
    Random_number_G=Math.floor(Math.random()*255)+1;
    Random_number_B=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML='I can Hear- '+results[0].label;
    document.getElementById("result_confidence").innerHTML= 'Accuracy- '+(results[0].confidence*100).toFixed(3)+"%";
    document.getElementById("result_label").style.color="rgb("+Random_number_R+","+Random_number_G+","+Random_number_R+")";
    document.getElementById("result_confidence").style.color="rgb("+Random_number_R+","+Random_number_G+","+Random_number_R+")";
    Image1=document.getElementById("Alien1");
    Image2=document.getElementById("Alien2");
    Image3=document.getElementById("Alien3");
    Image4=document.getElementById("Alien4");
    if(results[0].label=="CLAP"){
        Image1.src='aliens-01.gif';
        Image2.src='aliens-02.png';
        Image3.src='aliens-03.png';
        Image4.src='aliens-04.png';
    }
    else if(results[0].label=='BELL'){
        Image1.src='aliens-01.png';
        Image2.src='aliens-02.gif';
        Image3.src='aliens-03.png';
        Image4.src='aliens-04.png';
    }
    else if(results[0].label=='SNAP'){
        Image1.src='aliens-01.png';
        Image2.src='aliens-02.png';
        Image3.src='aliens-03.gif';
        Image4.src='aliens-04.png';
    }
    else{
        Image1.src='aliens-01.png';
        Image2.src='aliens-02.png';
        Image3.src='aliens-03.png';
        Image4.src='aliens-04.gif';
    }
}
}