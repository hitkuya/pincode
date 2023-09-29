function getCityAndState() {
    const pincode = document.getElementById("pincode").value;
    if (pincode) {
        fetch(`https://api.postalpincode.in/pincode/${pincode}`)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data) && data[0].Status === 'Success') {
                    const postOfficeData = data[0].PostOffice[0];
                    document.getElementById("city").value = postOfficeData.Block;
                    document.getElementById("state").value = postOfficeData.State;
                } else {
                    alert("Invalid pincode.");
                }
            })
            .catch(error => {
                alert("An error occurred while fetching data.");
                console.error(error);
            });
    } else {
        alert("Please enter a pincode.");
    }
}

const getCityAndStateButton = document.getElementById("getCityAndStateButton");
getCityAndStateButton.addEventListener("click", getCityAndState);