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

const selectionSort = (array) => {
    for (let i = 0 ; i < array.length ; i++){
        let minNumIndex = i; // set min number's index to i
        for (let j = i+1 ; j < array.length ; j++){                        
            if ( array[j] < array[minNumIndex]){ 
                minNumIndex = j; // change min number's index to j
            }            
        }
        // using change numbers using index
        const temp = array[i]        
        array[i] = array[minNumIndex]
        array[minNumIndex] = temp;
    }
    return array;
}



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
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((item) => Number(item.value));

    //const result = bubbleSort(inputValues);
    const result = selectionSort(inputValues)
    
    //render result
    renderResult(inputValues);
}


//init
sortBtn.addEventListener("click", sortInputArray);