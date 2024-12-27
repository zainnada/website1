document.getElementById("id-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const idNumber = document.getElementById("id-number").value;

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const user = data.find(user => user.id === idNumber);

            if (user) {
                document.getElementById("name").textContent = user.name;
                document.getElementById("age").textContent = user.age;
                document.getElementById("email").textContent = user.email;
                document.getElementById("result").classList.remove("hidden");
            } else {
                alert("رقم الهوية غير موجود!");
                document.getElementById("result").classList.add("hidden");
            }
        })
        .catch(error => {
            console.error("خطأ في تحميل البيانات:", error);
        });
});
