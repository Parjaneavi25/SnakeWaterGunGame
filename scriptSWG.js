// Snake, Water, Gun Game using Javascript
let color = prompt("Enter the page background color");
document.body.style.background = color;    // To change the color

document.write("Let's Play Snake, Water, Gun Game :");
let Avinash = prompt("Enter S, W or G")
let cpuI = Math.floor(Math.random() * 3);    // Math.random() is use to generate random number by cpu.
let cpu = ["S", "W", "G"][cpuI]

const match = (cpu, Avinash) => {
  if (cpu === Avinash) {
    return "Nobody"
  }
  else if (cpu === "S" && Avinash === "W") {
    return "CPU WON"
  }
  else if (cpu === "S" && Avinash === "G") {
    return "Avinash WON"
  }
  else if (cpu === "G" && Avinash === "W") {
    return "Avinash WON"
  }
  else if (cpu === "G" && Avinash === "S") {
    return "CPU WON"
  }
  else if (cpu === "W" && Avinash === "S") {
    return "Avinash WON"
  }
  else if (cpu === "W" && Avinash === "G") {
    return "CPU WON"
  }
}
let result = match(cpu, Avinash)
document.write(`<br> CPU:${cpu} <br> Avinash:${Avinash} <br>The winner is: ${result.toUpperCase()}`)
