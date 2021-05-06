var inputs=[];
inputs.join(". ");

function get_paragraph1(){
   for(var i=1; i <=6; i++){
       inputs.push(document.getElementById("para1_input_box_" + i).value);
   }
   console.log(inputs);
   document.getElementById("Show_Paragraph_1").innerHTML = inputs.join(". ");
}

function get_paragraph2(){
    for(var i=1; i <=6; i++){
        inputs.push(document.getElementById("para2_input_box_" + i).value);
    }
    console.log(inputs);
    document.getElementById("Show_Paragraph_2").innerHTML = inputs.join(". ");
 }