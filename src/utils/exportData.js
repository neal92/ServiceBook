/**
 * Utilitaires pour exporter des données dans différents formats
 */

/**
 * Convertit des données en CSV et déclenche le téléchargement
 * @param {Array} data - Tableau d'objets à exporter
 * @param {string} filename - Nom du fichier sans extension
 */
export function exportToCSV(data, filename = 'export') {
  if (!data || !data.length) return;
  
  // Obtenir les en-têtes à partir des clés du premier objet
  const headers = Object.keys(data[0]);
  
  // Créer la ligne d'en-tête
  let csv = headers.join(',') + '\n';
  
  // Ajouter les lignes de données
  data.forEach(item => {
    const row = headers.map(header => {
      // Échapper les guillemets et entourer de guillemets si nécessaire
      let cell = item[header] === null || item[header] === undefined ? '' : String(item[header]);
      if (cell.includes(',') || cell.includes('"') || cell.includes('\n')) {
        cell = `"${cell.replace(/"/g, '""')}"`;
      }
      return cell;
    });
    csv += row.join(',') + '\n';
  });
  
  // Créer et télécharger le fichier
  downloadFile(csv, `${filename}.csv`, 'text/csv');
}

/**
 * Convertit des données en JSON et déclenche le téléchargement
 * @param {Array|Object} data - Données à exporter
 * @param {string} filename - Nom du fichier sans extension
 */
export function exportToJSON(data, filename = 'export') {
  if (!data) return;
  
  const json = JSON.stringify(data, null, 2);
  downloadFile(json, `${filename}.json`, 'application/json');
}

/**
 * Génère un PDF basique à partir d'un tableau de données
 * @param {Array} data - Tableau d'objets à exporter
 * @param {string} title - Titre du document
 * @param {string} filename - Nom du fichier sans extension
 */
export function exportToPDF(data, title = 'Export', filename = 'export') {
  // Pour cette fonction, vous devrez implémenter une bibliothèque de génération de PDF
  // comme jsPDF, pdfmake, etc.
  
  // Exemple d'implémentation avec jsPDF:
  // Importer jsPDF dans votre fichier principal ou installer via npm
  
  // const jsPDF = window.jspdf.jsPDF;
  // const doc = new jsPDF();
  
  // doc.text(title, 20, 10);
  
  // // Ajouter une table
  // const headers = Object.keys(data[0]);
  // const rows = data.map(item => headers.map(header => item[header]));
  
  // doc.autoTable({
  //   head: [headers],
  //   body: rows,
  //   startY: 20
  // });
  
  // doc.save(`${filename}.pdf`);
  
  console.log('Fonction exportToPDF non implémentée - nécessite une bibliothèque PDF');
}

/**
 * Déclenche le téléchargement d'un fichier
 * @param {string} content - Contenu du fichier
 * @param {string} filename - Nom du fichier avec extension
 * @param {string} contentType - Type MIME du fichier
 */
function downloadFile(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  
  document.body.appendChild(link);
  link.click();
  
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 100);
}
