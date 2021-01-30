let customSelector = tagSelector => {
    return  document.querySelector(tagSelector);
}
let scriptElement = document.createElement('script');
let runButton = customSelector("#runCode");
let mochaDiv = customSelector("#mocha")
let body = customSelector("body");

runButton.addEventListener("click", e => {
    let codes = customSelector("#codes").value
    scriptElement.textContent = "";
    scriptElement.append(
        `function reverse (x) {
            ${codes}
        }`)
    body.prepend(scriptElement)
    mochaDiv.textContent === "" ? mocha.run() : mochaDiv.textContent = "";
    mocha.run();
})
