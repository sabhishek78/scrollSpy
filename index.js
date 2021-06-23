function scrollToHeading(e){
    var selectedBox = document.getElementById("selectBox");
    var selectedValue = selectedBox.options[selectBox.selectedIndex].value;
    var selectedOption = document.getElementById(selectedValue);
    selectedOption.scrollIntoView({ behavior: 'smooth', block: 'center' });


}

