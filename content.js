const targetText = [
  'Y88X',
  'Notepad_Go_803',
  'NotePad 101B',
  'kidzpad',
  'KidzPad',
  'KIDZPAD',
  'Dragontouch',
  'Dragon Touch',
  'T95',
  'MXQ',
  'M8S',
  'M9S',
  'A95',
  'MXV',
  'MxV',
  'MXIII',
  'MxIII',
  'TV987',
  "X96Q_Max_P",
  "Q96L2",
  "X96Q2",
  "X96mini",
  "S168",
  "ums512_1h10_Natv",
  "X96_S400",
  "X96mini_RP",
  "TX3mini",
  "HY-001",
  "MX10PRO",
  "X96mini_Plus1",
  "LongTV_GN7501E",
  "Xtv77",
  "NETBOX_B68",
  "X96Q_PR01",
  "AV-M9",
  "ADT-3",
  "OCBN",
  "X96MATE_PLUS",
  "KM1",
  "X96Q_PRO",
  "Projector_T6P",
  "X96QPRO-TM",
  "sp7731e_1h10_native",
  "M8SPROW",
  "TV008",
  "X96Mini_5G",
  "Q96MAX",
  "Orbsmart_TR43",
  "Z6",
  "TVBOX",
  "Smart",
  "KM9PRO",
  "A15",
  "Transpeed",
  "KM7",
  "iSinbox",
  "I96",
  "SMART_TV",
  "Fujicom-SmartTV",
  "MXQ9PRO",
  "MBOX",
  "X96Q",
  "isinbox",
  "Mbox",
  "R11",
  "GameBox",
  "KM6",
  "X96Max_Plus2",
  "TV007",
  "Q9 Stick",
  "SP7731E",
  "H6",
  "X88",
  "X98K",
  "TXCZ"
];

let fuse;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("deviceForm");
  const input = document.getElementById("deviceInput");
  const resultDiv = document.getElementById("result");

  // Initialize Fuse.js
  fuse = new Fuse(targetText, {
    includeScore: true,
    threshold: 0.4,
    ignoreLocation: true
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const query = input.value.trim();

    const result = fuse.search(query);

    if (result.length > 0 && result[0].score < 0.4) {
      resultDiv.innerHTML = `<p class="w3-text-green"><strong>✅ Closest model name match:</strong> ${result[0].item}</p>`;
    } else {
      resultDiv.innerHTML = `<p class="w3-text-red"><strong>❌ No close match found.</strong> Try just including model name without the number.</p>`;
    }
  });
});
