//vars
const sortBtn = document.getElementById("sort");


//function to bubble sort
const bubbleSort = (array) => {
    for (let i = 0 ; i < array.length ; i++ ){ // repeat as array length
        for (let j = 0; j < array.length -1 ; j++){
            if (array[j] > array[j+1]){
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }        
    }
    return array;
};


//function to render
const renderResult = (array = []) => {
    
    array.forEach((num,i) => { // using array value and index
        // select target with index
        const target = document.getElementById(`output-value-${i}`);

        //update target text with num
        target.innerText = num;
    })
}


//function to prevent refresh, get input values, call sort and render function with that 
const sortInputArray = (e) => {    
    //prevent referesh
    e.preventDefault();    
    
    //get input value and turn to number array
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((item) => Number(item.value))

    const result = bubbleSort(inputValues)
    
    //render result
    renderResult(inputValues);
}


//init
sortBtn.addEventListener("click", sortInputArray)