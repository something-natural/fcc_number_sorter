//vars
const sortBtn = document.getElementById("sort");


//function to bubble sort
const bubbleSort = (arr) => {
    for (let i = 0 ; i < arr.length ; i++ ){ // repeat as arr length
        for (let j = 0; j < arr.length -1 ; j++){
            if (arr[j] > arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }        
    }
    return arr;
};

//function to selection sort
const selectionSort = (arr) => {
    for (let i = 0 ; i < arr.length ; i++){
        let minNumIndex = i; // set min number's index to i
        for (let j = i+1 ; j < arr.length ; j++){                        
            if ( arr[j] < arr[minNumIndex]){ 
                minNumIndex = j; // change min number's index to j
            }            
        }
        // using change numbers using index
        const temp = arr[i]        
        arr[i] = arr[minNumIndex]
        arr[minNumIndex] = temp;
    }
    return arr;
}


//function to insertion sort
const insertSort = (arr) => {
    for (let i = 1 ; i < arr.length ; i++){ //start from 1 because you need at least one number before key                
        let key = arr[i];
        for (let j = i - 1 ; j >= 0 ; j--){            
            if ( key < arr[j]){                
                arr[j+1] = arr[j]; // push arr[j] to arr[j+1]
                arr[j] = key; 
            }
        }
    }
    return arr;
}


//function to render
const renderResult = (arr = []) => {
    
    arr.forEach((num,i) => { // using arr value and index
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
    
    //get input value and turn to number arr
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((item) => Number(item.value));

    //const result = bubbleSort(inputValues);
    //const result = selectionSort(inputValues)
    //const result = insertSort(inputValues);
    const result = inputValues.sort((a,b) => {
        return a-b;
    }        
    )
    
    //render result
    renderResult(inputValues);
}


//init
sortBtn.addEventListener("click", sortInputArray);