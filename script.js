function calculoSalario() {
    let salarioBruto = parseFloat(document.getElementById("salario").value); 
    let inss = 0.08;
    let irrf = 0.11;
    let desc_irrf;
    let desc_inss;
    let salarioLiq;

    if (salarioBruto <= 2379) {
        desc_inss = salarioBruto * inss;
        salarioLiq = salarioBruto - desc_inss;
    } else {
        desc_inss = salarioBruto * inss;
        desc_irrf = salarioBruto * irrf;
        salarioLiq = salarioBruto - desc_inss - desc_irrf;
    }
    
    let salarioTotalElement = document.querySelector(".salarioTotal");
    salarioTotalElement.innerHTML = "Salário Líquido: " + salarioLiq.toFixed(2);
}