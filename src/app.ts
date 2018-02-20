function greeting(name: string) {
    return "Hello " + name;
}

document.getElementById("welcome-text").innerText = greeting("Maarten");