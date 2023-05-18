(
    async function () {
        new Chart(
            document.getElementById("grafico1"),
            {
                type: "bar",
                data: {
                    labels: ["Português", "Matemática"],
                    datasets: [
                        {
                            label: "Média de Notas",
                            data: [7.5, 10]
                        }
                    ]
                }
            }

        )

    }
)();