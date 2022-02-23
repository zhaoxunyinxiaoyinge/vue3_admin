import html2canvas from "html2canvas";
import JsPDF from "jspdf";

function exportPDF() {
  return (app) => {
    app.config.globalProperties.pdf = (domId, name) => {
      var title = this.htmlTitle;
      html2Canvas(domId, {
        allowTaint: true,
        backgroundColor: "#ffffff",
      }).then((canvas) => {
        let contentWidth = canvas.width;
        let contentHeight = canvas.height;

        let pageHeight = (contentWidth / 592.28) * 841.89;
        let leftHeight = contentHeight;

        let PDF = new JsPDF("p", "pt", "a4");
        PDF.save(name + ".pdf");
      });
    };
  };
}
