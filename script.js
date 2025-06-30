function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Vargas;John Stiven;;;
FN:John Stiven Vargas
TITLE:CBO – Chief Business Officer
ORG:HSLATAM
TEL;TYPE=CELL:+573155285466
EMAIL:svargas@hslatam.com
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
