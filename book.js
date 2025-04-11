// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll("table.sortable thead").forEach((thead) => {
//         thead.addEventListener("click", function (e) {
//             if (e.target.tagName !== "TH") return;

//             const th = e.target;
//             const table = th.closest("table");
//             const tbody = table.querySelector("tbody");
//             const index = Array.from(th.parentNode.children).indexOf(th);
//             const ascending = th.classList.toggle("asc");

//             // Remove sort class from others
//             Array.from(th.parentNode.children).forEach(t => {
//                 if (t !== th) t.classList.remove("asc");
//             });

//             Array.from(tbody.querySelectorAll("tr"))
//                 .sort((rowA, rowB) => {
//                     const cellA = rowA.children[index].textContent.trim();
//                     const cellB = rowB.children[index].textContent.trim();
//                     return ascending
//                         ? cellA.localeCompare(cellB, undefined, { numeric: true })
//                         : cellB.localeCompare(cellA, undefined, { numeric: true });
//                 })
//                 .forEach(row => tbody.appendChild(row));
//         });
//     });

//     // VALUE-BASED COLORING
//     // document.querySelectorAll("table.sortable tbody tr").forEach((row) => {
//     //     row.querySelectorAll("td").forEach((cell) => {
//     //         const val = parseFloat(cell.textContent.trim());
//     //         if (!isNaN(val)) {
//     //             if (val < 30) {
//     //                 cell.classList.add("low");
//     //             } else if (val < 60) {
//     //                 cell.classList.add("medium");
//     //             } else {
//     //                 cell.classList.add("high");
//     //             }
//     //         }
//     //     });
//     // });
// });
