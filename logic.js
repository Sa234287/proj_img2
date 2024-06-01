const imageUrl1 = "https://reqres.in/img/faces/1-image.jpg";
    async function fetchAndDisplayImage1(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        document.getElementById('fetched-image1').src = imageUrl1;
    } catch (error) {
        console.error('Error fetching image:', error);
        }
        }
fetchAndDisplayImage1(imageUrl1);

const imageUrl2 = "https://reqres.in/img/faces/2-image.jpg";
    async function fetchAndDisplayImage2(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        document.getElementById('fetched-image2').src = imageUrl2;
    } catch (error) {
        console.error('Error fetching image:', error);
        }
        }
fetchAndDisplayImage2(imageUrl2);

const imageUrl3 = "https://reqres.in/img/faces/3-image.jpg";
    async function fetchAndDisplayImage3(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        document.getElementById('fetched-image3').src = imageUrl3;
    } catch (error) {
        console.error('Error fetching image:', error);
        }
        }
fetchAndDisplayImage3(imageUrl3);

const imageUrl4 = "https://reqres.in/img/faces/4-image.jpg";
    async function fetchAndDisplayImage4(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        document.getElementById('fetched-image4').src = imageUrl4;
    } catch (error) {
        console.error('Error fetching image:', error);
        }
        }
fetchAndDisplayImage4(imageUrl4);

const imageUrl5 = "https://reqres.in/img/faces/5-image.jpg";
    async function fetchAndDisplayImage5(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        document.getElementById('fetched-image5').src = imageUrl5;
    } catch (error) {
        console.error('Error fetching image:', error);
        }
        }
fetchAndDisplayImage5(imageUrl5);

const imageUrl6 = "https://reqres.in/img/faces/6-image.jpg"
    async function fetchAndDisplayImage6(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        document.getElementById('fetched-image6').src = imageUrl6;
    } catch (error) {
        console.error('Error fetching image:', error);
        }
        }
fetchAndDisplayImage6(imageUrl6);