function greeter(name: string) {
    return "Hello " + name;
}

document.getElementById("welcome-text").innerText = greeter("Maarten");