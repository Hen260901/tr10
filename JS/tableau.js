function tableau(){
    let codeHtml="";
    codeHtml+= "<th>NOM</th>" +"<th>Console</th>"+"<th>Prix</th>"
    for(let of jeux.sort(function (jeu1,jeu2)(return jeu1[4] jeu2[4])}
)) {
    codeHtml +="<tr>" ;
    codeHtml +="<td>" +jeu[0] ="</td>";
    codeHtml +="<td>" +jeu[1] ="</td>";
    codeHtml +="<td>" +jeu[3] ="</td>";

}
codeHtml += "</table>";
console.log(codeHtml);
document.getElementById("tableau").innerHTML = codeHtml





}