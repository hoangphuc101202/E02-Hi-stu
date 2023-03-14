function demo1(): void{
    let input: HTMLInputElement= <HTMLInputElement>document.getElementById("fullname");
    let name: String = input.value;
    let result ="Hi, "+ name + "!";
    let p:HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
    p.innerHTML = result;
}
export{};