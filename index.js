// Function to generate a random integer in a given range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create bars
function createBars() {
    const barsContainer = document.getElementById("barsContainer");
    barsContainer.innerHTML = ""; // Clear previous bars

    const bars = [];
    const numberOfBars = document.getElementById("arr_sz").value;

    for (let i = 0; i < numberOfBars; i++) {
        const height = getRandomInt(10, 100); // Change range as needed
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${height}px`;
        bars.push(bar);
        barsContainer.appendChild(bar);
    }
    return bars;
}

// Function to generate new array of bars
function generateNewArray() {
    createBars();
}

// Swap function for bars
async function swapBars(bar1, bar2) {
    const style1 = window.getComputedStyle(bar1);
    const style2 = window.getComputedStyle(bar2);
    const height1 = style1.getPropertyValue("height");
    const height2 = style2.getPropertyValue("height");

    bar1.style.height = height2;
    bar2.style.height = height1;

    // Delay for visualization
    const speed = document.getElementById("speed").value;
    await new Promise(resolve => setTimeout(resolve, 200 - (speed * 50)));
}

// Bubble Sort
async function bubbleSort() {
    const bars = document.querySelectorAll(".bar");

    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.backgroundColor = "#ff4136"; // Red color for comparison
            bars[j + 1].style.backgroundColor = "#ff4136"; // Red color for comparison

            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                await swapBars(bars[j], bars[j + 1]);
            }

            bars[j].style.backgroundColor = "#007bff"; // Reset color
            bars[j + 1].style.backgroundColor = "#007bff"; // Reset color
        }
        bars[bars.length - i - 1].style.backgroundColor = "#28a745"; // Green for sorted bar
    }
}

// Selection Sort
async function selectionSort() {
    const bars = document.querySelectorAll(".bar");

    for (let i = 0; i < bars.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < bars.length; j++) {
            bars[j].style.backgroundColor = "#ff4136"; // Red color for comparison
            if (parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height)) {
                minIndex = j;
            }
            await new Promise(resolve => setTimeout(resolve, 10)); // Delay for visualization
            bars[j].style.backgroundColor = "#007bff"; // Reset color
        }
        await swapBars(bars[minIndex], bars[i]);
        bars[i].style.backgroundColor = "#28a745"; // Green for sorted bar
    }
}

// Insertion Sort
async function insertionSort() {
    const bars = document.querySelectorAll(".bar");

    for (let i = 1; i < bars.length; i++) {
        let currentHeight = parseInt(bars[i].style.height);
        let j = i - 1;
        bars[i].style.backgroundColor = "#ff4136"; // Red color for comparison

        while (j >= 0 && parseInt(bars[j].style.height) > currentHeight) {
            bars[j].style.backgroundColor = "#ff4136"; // Red color for comparison
            await swapBars(bars[j + 1], bars[j]);
            bars[j].style.backgroundColor = "#007bff"; // Reset color
            j--;
        }
        bars[j + 1].style.height = `${currentHeight}px`;

        for (let k = i; k >= 0; k--) {
            bars[k].style.backgroundColor = "#28a745"; // Green for sorted bar
        }
    }
}

// Quick Sort
async function quickSort() {
    const bars = document.querySelectorAll(".bar");

    async function partition(low, high) {
        let pivot = parseInt(bars[high].style.height);
        let i = low - 1;

        for (let j = low; j < high; j++) {
            bars[j].style.backgroundColor = "#ff4136"; // Red color for comparison
            if (parseInt(bars[j].style.height) < pivot) {
                i++;
                await swapBars(bars[i], bars[j]);
            }
            bars[j].style.backgroundColor = "#007bff"; // Reset color
        }
        await swapBars(bars[i + 1], bars[high]);
        bars[high].style.backgroundColor = "#28a745"; // Green for sorted bar
        return i + 1;
    }

    async function quickSortHelper(low, high) {
        if (low < high) {
            let pivotIndex = await partition(low, high);
            await quickSortHelper(low, pivotIndex - 1);
            await quickSortHelper(pivotIndex + 1, high);
        }
    }

    await quickSortHelper(0, bars.length - 1);
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "#28a745"; // Green for sorted bar
    }
}

// Merge Sort


// Initialize bars on page load
createBars();

// Event listener for "Generate New Array" button
const newArrayBtn = document.getElementById("newArrayBtn");
newArrayBtn.addEventListener("click", generateNewArray);

// Event listeners for sorting buttons



// Event listener for changing number of bars

