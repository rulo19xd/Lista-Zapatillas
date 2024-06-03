document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const table = document.getElementById("tabla");
    const tbody = table.getElementsByTagName("tbody")[0];
    const rows = tbody.getElementsByTagName("tr");
    const noResultsDiv = document.getElementById("noResults");

    searchInput.addEventListener("keyup", function() {
        const filter = searchInput.value.toLowerCase();
        let foundResults = false;

        // Iterar sobre todas las filas del tbody
        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName("td");
            let rowContainsFilter = false;

            // Iterar sobre todas las celdas de la fila
            for (let j = 0; j < cells.length; j++) {
                if (cells[j]) {
                    const cellText = cells[j].textContent.toLowerCase();
                    if (cellText.indexOf(filter) > -1) {
                        rowContainsFilter = true;
                        foundResults = true;
                        break;
                    }
                }
            }

            // Mostrar u ocultar la fila según si contiene el filtro
            if (rowContainsFilter) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
        if (foundResults) {
            noResultsDiv.style.display = "none";
            table.style.display = ""; // Mostrar la tabla
        } else {
            noResultsDiv.style.display = "block";
            table.style.display = "none"; // Ocultar la tabla
        }
    });
});
