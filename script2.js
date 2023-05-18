(
    async function () {
        new Chart(
            document.getElementById("grafico2"),
            {
                type: "line",
                data: {
                    labels: ["fev", "mar","abr","mai","jun"],
                    datasets: [
                        {
                            label: "total de faltas",
                            data: [5,1,4,0,10]
                        }
                    ]
                }
            }

        )

    }
)();