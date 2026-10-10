document.addEventListener("DOMContentLoaded", () => {

    const ctx = document.getElementById("stockChart");

    if(!ctx) return;

    new Chart(ctx, {

        type: "bar",

        data: {

            labels: [

                "Produtos",
                "Entradas",
                "Saídas"

            ],

            datasets: [{

                label: "Quantidade",

                data: [0,0,0],

                borderWidth: 1,

                borderRadius: 8,

                backgroundColor: [

                    "#22396F",
                    "#22C55E",
                    "#DC2626"

                ]

            }]

        },

        options: {

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{

                    display:false

                }

            },

            scales:{

                y:{

                    beginAtZero:true,

                    ticks:{

                        stepSize:1

                    }

                }

            }

        }

    });

});