window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("moveToTop").style.display = "block";
            } else {
                document.getElementById("moveToTop").style.display = "none";
            }
        }

        function moveToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }

        
        // JavaScript to display popup when submit button is clicked
        document.getElementById("submitBtn").addEventListener("click", function() {
            alert("Your response has been submitted");
        });
        document.getElementById("submitButton").addEventListener("click", function() {
            alert("Your response has been submitted");
        });