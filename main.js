var names=["melainamartinez","arianamartinez","melissamartinez","rubenmartinez"];
console.log(names);
document.getElementById("declare_of_array").innerHTML=names;


var images=["https://th.bing.com/th/id/R.0bba4aca69fa70fbddd63ea132f48da1?rik=ErBPdFdSXuwrbg&riu=http%3a%2f%2fsimplywheatbread.com%2fwp-content%2fuploads%2f2017%2f01%2fbobhairavatar-180x180.jpg&ehk=qY9j6FB08wHU9V5d1WoMbD7X%2bKC836hcsMWcDhyEsGg%3d&risl=&pid=ImgRaw",
"https://th.bing.com/th/id/R.fcb88d0060b7c3e21255963962360bce?rik=ZKC0Cf4TY9ziyw&riu=http%3a%2f%2fsimplywheatbread.com%2fwp-content%2fuploads%2f2017%2f01%2fbrownhairlong-180x180.jpg&ehk=yhLn4kscYp8rtkEmPQSRH3Pr1HHBVmzIKGBmuT3S65I%3d&risl=&pid=ImgRaw",
"https://th.bing.com/th/id/OIP.W1L51N7nMqTBg6HGdq-E9gAAAA?pid=ImgDet&rs=1"];


var firstnames=names[0];
console.log(firstnames);
document.getElementById("access_first_element").innerHTML=names;

var secondnames=names[1];
console.log(secondnames);
document.getElementById("access_second_element").innerHTML=names;

var thirdnames=names[2];
console.log(thirdnames);
document.getElementById("access_third_element").innerHTML=names;

var fourthnames=names[3];
console.log(fourthnames);
document.getElementById("access_fourth_element").innerHTML=names;

var lenght_of_the_array = names.length;
console.log(lenght_of_the_array);
document.getElementById("display_lenght_of_array").innerHTML=length;


var array_value="";
for(i=0;i<names.length;i++){
    console.log(names[i]);
    array_value=array_value +names[i]+"<br>";
}





var i= 0;

function update(){
    i++;
    var numbers_of_family_member_in_array=4
    if(i > numbers_of_family_member_in_array)
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatesName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatesName;
}