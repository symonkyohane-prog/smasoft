const d = new Date();
document.getElementById("dat").innerHTML = d.toDateString();


document.getElementById('linkSelect').addEventListener('change', function() {
    const url = this.value;
    if (url) {
      window.location.href = url; // Redirect to selected link
    }
  });

  const n = new Date("07/08/2025");
document.getElementById("exdate").innerHTML = n;

const m = new Date("02/01/2023");
document.getElementById("MTL").innerHTML = 'Start on' + ' '+m;

const end = new Date("04/26/2024");
document.getElementById("MTLe").innerHTML = 'Ended on '+' '+end;


const itecs = new Date("11/11/2024");
document.getElementById("menzo").innerHTML = 'Ended on '+' '+itecs;

const itec = new Date("06/15/2025");
document.getElementById("phiri").innerHTML = 'Ended on '+' '+itec;