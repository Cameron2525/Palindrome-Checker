document.getElementById("check-btn").addEventListener("click", () => {
    const input = document.getElementById("text-input").value.trim();
    const resultElement = document.getElementById("result");

  
    if (!input) {
        alert("Please input a value");
        return;
    }

   
    const isPalindrome = (str) => {
        const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        return cleanedStr === cleanedStr.split('').reverse().join('');
    };

        resultElement.innerText = isPalindrome(input) 
        ? `${input} is a palindrome` 
        : `${input} is not a palindrome`;
});

